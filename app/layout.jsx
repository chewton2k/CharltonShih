import { Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import './styles/HomePage.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600'],
});

export const metadata = {
  title: 'Charlton Shih',
  icons: {
    icon: '/snoopy.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
