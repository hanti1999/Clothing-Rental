'use client';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import Image from 'next/image';
import { ImageKitUploadNetworkError, ImageKitAbortError } from '@imagekit/next';
import { ImageKitServerError, upload } from '@imagekit/next';
import { ImageKitInvalidRequestError } from '@imagekit/next';
import { cn } from '@/lib/utils';

interface Props {
  type: 'image' | 'video';
  accept: string;
  placeholder: string;
  folder: string;
  variant: 'dark' | 'light';
  onFileChange: (filePath: string) => void;
  value?: string;
}

const authenticator = async () => {
  try {
    const response = await fetch(`/api/upload-auth`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }
    const data = await response.json();
    const { signature, expire, token, publicKey } = data;
    return { token, expire, signature, publicKey };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const FileUpload = ({ type, placeholder, variant, onFileChange }: Props) => {
  const ikUploadRef = useRef<HTMLInputElement>(null);
  const abortController = new AbortController();
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  const styles = {
    button:
      variant === 'dark'
        ? 'bg-dark-300'
        : 'bg-light-600 border-gray-100 border',
    placeholder: variant === 'dark' ? 'text-light-100' : 'text-slate-500',
    text: variant === 'dark' ? 'text-light-100' : 'text-dark-400',
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const fileSizeKB = file?.size / 1024;
    if (type === 'image') {
      if (fileSizeKB > 1024) {
        toast('Kích thước ảnh quá lớn, vui lòng chọn ảnh dưới 1MB');
        return;
      } else {
        setFile(file);
        handleUpload();
      }
    } else if (type === 'video') {
      if (fileSizeKB > 51200) {
        toast('Kích thước video quá lớn, vui lòng chọn video dưới 50MB');
        return;
      } else {
        setFile(file);
      }
    }
  };

  const handleUpload = async () => {
    const fileInput = ikUploadRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert('Please select a file to upload');
      return;
    }
    const file = fileInput.files[0];
    let authParams;
    try {
      authParams = await authenticator();
    } catch (authError) {
      console.error('Failed to authenticate for upload:', authError);
      return;
    }
    const { signature, expire, token, publicKey } = authParams;
    try {
      const uploadResponse = await upload({
        expire,
        token,
        signature,
        publicKey,
        file,
        fileName: file.name,
        onProgress: (event) => {
          setProgress((event.loaded / event.total) * 100);
        },
        abortSignal: abortController.signal,
      });
      onFileChange(uploadResponse?.url as string); // lấy đường dẫn gửi lên component cha
    } catch (error) {
      if (error instanceof ImageKitAbortError) {
        toast(`Upload aborted: ${error.reason}`);
      } else if (error instanceof ImageKitInvalidRequestError) {
        toast(`Upload aborted: ${error.message}`);
      } else if (error instanceof ImageKitUploadNetworkError) {
        toast(`Upload aborted: ${error.message}`);
      } else if (error instanceof ImageKitServerError) {
        toast(`Upload aborted: ${error.message}`);
      } else {
        toast(`Upload error: ${error}`);
      }
    }
  };

  return (
    <>
      <input
        type='file'
        ref={ikUploadRef}
        className='hidden'
        onChange={handleImageUpload}
      />

      <button
        className={cn('upload-btn', styles.button)}
        onClick={(e) => {
          e.preventDefault();
          if (ikUploadRef.current) {
            // @ts-ignore
            ikUploadRef.current?.click();
          }
        }}
      >
        <Image
          src='/icons/upload.svg'
          alt='upload-icon'
          width={20}
          height={20}
          className='object-contain'
        />

        <p className={cn('text-base', styles.placeholder)}>{placeholder}</p>
      </button>

      {progress > 0 && progress !== 100 && (
        <div className='w-full rounded-full bg-green-200'>
          <div className='progress' style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}

      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt='image'
          className='w-[500px] h-[500px] rounded-lg'
        />
      )}
    </>
  );
};

export default FileUpload;
