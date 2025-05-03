import Image from 'next/image';
import React from 'react';
import ClothingCover from './ClothingCover';
import { Button } from './ui/button';

const ClothingOverview = ({
  title,
  brand,
  style,
  rating,
  totalStock,
  availableStock,
  description,
  color,
  size,
  coverUrl,
}: IClothing) => {
  return (
    <div className='clothing-overview'>
      <div className='flex flex-1 flex-col gap-5'>
        <h1>{title}</h1>
        <div className='clothing-info'>
          <p>
            Thương hiệu:{' '}
            <span className='font-semibold text-light-200'>{brand}</span>
          </p>

          <p>
            Danh mục:{' '}
            <span className='font-semibold text-light-200'>{style}</span>
          </p>

          <div className='flex flex-row gap-1'>
            <Image src={'/icons/star.svg'} alt='star' width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>

        <div className='clothing-stock'>
          <p>
            Tổng: <span>{totalStock}</span> sản phẩm
          </p>
          <p>
            Còn lại: <span>{availableStock}</span> sản phẩm
          </p>
        </div>

        <p className='clothing-description'>{description}</p>

        <div className='flex xs:flex-row flex-col gap-5'>
          <Button className='clothing-overview_btn'>
            <Image
              src={'/icons/book.svg'}
              alt='clothing'
              width={20}
              height={20}
            />
            <p className='font-bebas-neue text-xl text-dark-100'>Thuê đồ</p>
          </Button>

          <Button className='clothing-overview_btn'>
            <Image
              src={'/icons/book.svg'}
              alt='clothing'
              width={20}
              height={20}
            />
            <p className='font-bebas-neue text-xl text-dark-100'>Mua luôn!</p>
          </Button>
        </div>
      </div>

      <div className='relative flex flex-1 justify-center'>
        <div className='relative'>
          <ClothingCover
            variant='wide'
            className='z-10'
            coverImage={coverUrl}
          />

          <div className='absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden'>
            <ClothingCover variant='wide' coverImage={coverUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingOverview;
