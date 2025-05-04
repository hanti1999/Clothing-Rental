import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// hàm quản lý class của Tailwind, giúp nối các class có điều kiện phức tạp
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Lấy ra chữ cái đầu tiên của tên // Ví dụ: "Nguyễn Văn A" => "NVA"
export const getInitials = (name: string): string =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
