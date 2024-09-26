import MainHeader from '@/components/main-header';
import { Nunito } from 'next/font/google';

import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
});


export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body>
  
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
