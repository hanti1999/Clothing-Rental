import { SessionProvider } from 'next-auth/react';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { auth } from '@/auth';

const imbPlexSans = localFont({
  src: [
    { path: '/fonts/IBMPlexSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '/fonts/IBMPlexSans-Medium.ttf', weight: '500', style: 'normal' },
    {
      path: '/fonts/IBMPlexSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    { path: '/fonts/IBMPlexSans-Bold.ttf', weight: '700', style: 'normal' },
  ],
});

const bebasNeue = localFont({
  src: [
    { path: '/fonts/BebasNeue-Regular.ttf', weight: '400', style: 'normal' },
  ],
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  title: 'Thuê đồ',
  description: 'Ở đây cho thuê đồ',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const sesstion = await auth();
  return (
    <html lang='en'>
      <SessionProvider session={sesstion}>
        <body
          className={`${imbPlexSans.className} ${bebasNeue.variable} antialiased`}
        >
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
