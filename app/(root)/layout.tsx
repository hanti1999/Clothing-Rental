import { redirect } from 'next/navigation';
import { after } from 'next/server';
import { eq } from 'drizzle-orm';
import React from 'react';
import { users } from '@/database/schema';
import Header from '@/components/Header';
import { db } from '@/database/drizzle';
import { auth } from '@/auth';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) redirect('/sign-in');

  after(async () => {
    if (!session?.user?.id) return;
    await db
      .update(users)
      .set({ lastActivityDate: new Date().toISOString().slice(0, 10) })
      .where(eq(users.id, session?.user?.id));
  });
  return (
    <main className='root-container'>
      <div className='mx-auto max-w-7xl'>
        <Header session={session} />
        <div className='mt-20 pb-20'>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
