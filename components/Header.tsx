'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className='my-10 flex justify-between gap-5'>
      <Link href='/'>
        <Image src={'/icons/logo.svg'} alt='logo' width={40} height={40} />
      </Link>

      <ul className='flex flex-row items-center gap-8'>
        <li>
          <Link
            href='/clothing'
            className={cn(
              'text-base cursor-pointer capitalize',
              pathname === '/clothing' ? 'text-light-200' : 'text-light-100'
            )}
          >
            Cửa hàng
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
