import Link from 'next/link';
import React from 'react';
import ClothingCover from './ClothingCover';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';

const ClothingCard = ({
  id,
  title,
  style,
  cover,
  isLoaned = false,
}: IClothing) => {
  return (
    <li className={cn(isLoaned && 'sx:w-52 w-full')}>
      <Link
        href={`/clothing/${id}`}
        className={cn(isLoaned && 'w-full flex flex-col items-center')}
      >
        <ClothingCover coverImage={cover} />
        <div className={cn('mt-4', !isLoaned && 'xs:max-w-40 max-w-28')}>
          <p className='clothing-title'>{title}</p>
          <p className='clothing-style'>{style}</p>
        </div>
        {isLoaned && (
          <div className='mt-3 w-full'>
            <div className='clothing-loaned'>
              <Image
                src='/icons/calendar.svg'
                alt='calendar'
                className='object-contain'
                width={18}
                height={18}
              />
              <p className='text-light-100'>Trả sau 7 ngày</p>
            </div>

            <Button className='clothing-btn cursor-pointer'>
              <p className='font-bebas-neue text-xl text-dark-100'>Tải phiếu</p>
            </Button>
          </div>
        )}
      </Link>
    </li>
  );
};

export default ClothingCard;
