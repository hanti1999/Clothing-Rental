'use client';
import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  upload,
} from '@imagekit/next';
import {
  ImageKitUploadNetworkError,
  ImageKitServerError,
} from '@imagekit/next';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import config from '@/lib/config';
import { cn } from '@/lib/utils';

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);
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

interface Props {
  type: 'image' | 'video';
  accept: string;
  placeholder: string;
  folder: string;
  variant: 'dark' | 'light';
  onFileChange: (filePath: string) => void;
  value?: string;
}

const FileUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
  value,
}: Props) => {
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
      return; // Không có file nào được chọn
    }
    const fileSizeKB = file?.size / 1024;
    if (type === 'image') {
      if (fileSizeKB > 1024) {
        toast('Kích thước ảnh quá lớn, vui lòng chọn ảnh dưới 1MB');
        return;
      } else {
        setFile(file);
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
    // Access the file input element using the ref
    const fileInput = ikUploadRef.current;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      alert('Please select a file to upload');
      return;
    }
    // Extract the first file from the file input
    const file = fileInput.files[0];
    // Retrieve authentication parameters for the upload.
    let authParams;
    try {
      authParams = await authenticator();
    } catch (authError) {
      console.error('Failed to authenticate for upload:', authError);
      return;
    }
    const { signature, expire, token, publicKey } = authParams;
    // Call the ImageKit SDK upload function with the required parameters and callbacks.
    try {
      const uploadResponse = await upload({
        // Authentication parameters
        expire,
        token,
        signature,
        publicKey,
        file,
        fileName: file.name, // Optionally set a custom file name
        // Progress callback to update upload progress state
        onProgress: (event) => {
          setProgress((event.loaded / event.total) * 100);
        },
        // Abort signal to allow cancellation of the upload if needed.
        abortSignal: abortController.signal,
      });
      console.log('Upload response:', uploadResponse);
    } catch (error) {
      // Handle specific error types provided by the ImageKit SDK.
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
