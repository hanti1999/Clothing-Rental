import { IKImage, ImageKitProvider, IKUpload } from 'imagekitio-next';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import config from '@/lib/config';

const authenticator = async () => {
  try {
    const res = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Gọi api thất bại ${error}`);
    }

    const data = await res.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: any) {
    throw new Error('Xác thực thất bại: ' + error.message);
  }
};

const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void;
}) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = (err: any) => {
    console.error(err);
    toast('Tải ảnh lên không thành công');
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);
    toast('Tải ảnh lên thành công');
  };

  return (
    <ImageKitProvider
      publicKey={config.env.imagekit.publicKey}
      urlEndpoint={config.env.imagekit.urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className='hidden'
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName='test-upload.png'
      />

      <button
        className='upload-btn'
        onClick={(e) => {
          e.preventDefault();
          if (ikUploadRef.current) {
            //@ts-ignore
            ikUploadRef.current?.click();
          }
        }}
      >
        <Image
          src='icons/upload.svg'
          alt='upload-btn'
          width={20}
          height={20}
          className='object-contain'
        />
        <p className='text-base text-light-100'>Chọn ảnh</p>
        {file && <p className='upload-filename'>{file.filePath}</p>}
      </button>
      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        />
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
