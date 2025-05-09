import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

type ClothingCoverVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'regular'
  | 'wide';

const variantStyles: Record<ClothingCoverVariant, string> = {
  extraSmall: 'clothing-cover_extra_small',
  small: 'clothing-cover_small',
  medium: 'clothing-cover_medium',
  regular: 'clothing-cover_regular',
  wide: 'clothing-cover_wide',
};

interface IProps {
  className?: string;
  variant?: ClothingCoverVariant;
  coverImage?: string;
}
const ClothingCover = ({
  className,
  variant = 'regular',
  coverImage = 'https://placehold.co/400x600.png',
}: IProps) => {
  return (
    <div
      className={cn(
        'relative transition-all duration-300',
        variantStyles[variant],
        className
      )}
    >
      <div
        className='absolute z-10'
        style={{ left: '12%', width: '87.5%', height: '88%' }}
      >
        <Image
          src={coverImage}
          alt='clothing-cover'
          fill
          className='rounded-sm object-fill'
        />
      </div>
    </div>
  );
};

export default ClothingCover;
