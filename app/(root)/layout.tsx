import React from 'react';
import Header from '@/components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root-container'>
      <div className='mx-auto max-w-7xl'>
        <Header />
        <div className='mt-20 pb-20'>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
