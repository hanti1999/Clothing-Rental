import React from 'react';
import ClothingCard from './ClothingCard';

interface IProps {
  title: string;
  clothing: IClothing[];
  containerClassName?: string;
}

const ClothingList = ({ title, clothing, containerClassName }: IProps) => {
  return (
    <section className={containerClassName}>
      <h2 className='font-bebas-neue text-4xl text-light-100'>{title}</h2>
      <ul className='clothing-list'>
        {clothing?.map((item, index) => (
          <ClothingCard key={index} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default ClothingList;
