import { signOut } from '@/auth';
import ClothingList from '@/components/ClothingList';
import { Button } from '@/components/ui/button';
import { sampleClothing } from '@/constants';
import React from 'react';

const Page = () => {
  return (
    <>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button>Đăng xuất</Button>
      </form>
      <ClothingList title='Sách hay!!!' clothing={sampleClothing} />
    </>
  );
};

export default Page;
