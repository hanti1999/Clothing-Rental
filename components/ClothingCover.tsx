import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

type ClothingCoverVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'regular'
  | 'wide';

const variantStyle: Record<ClothingCoverVariant, string> = {
  extraSmall: 'clothing-cover_extra-small',
  small: 'clothing-cover_small',
  medium: 'clothing-cover_medium',
  regular: 'clothing-cover_regular',
  wide: 'clothing-cover_wide',
};

interface IProps {
  className?: string;
  variant?: ClothingCoverVariant;
  coverColor?: string;
  coverImage?: string;
}
const ClothingCover = ({
  className,
  variant = 'regular',
  coverColor = '#012B48',
  coverImage = 'https://placehold.co/400x600.png',
}: IProps) => {
  return (
    <div
      className={cn(
        'relative, transition-all duration-300',
        variantStyle[variant],
        className
      )}
    >
      CLOTHING SVG
      <div
        className='absolute z-10'
        style={{ left: '12%', width: '87.5%', height: '88%' }}
      >
        <Image
          src={coverImage}
          alt='clothing-cover'
          fill
          className='rouned-sm object-fill'
        />
      </div>
    </div>
  );
};

export default ClothingCover;
