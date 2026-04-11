import { Inter } from 'next/font/google';

import './globals.css';
import './components/Navbar.css';
import './styles/HomePage.css';

import Navbar from './components/Navbar';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Charlton Shih',
  icons: {
    icon: '/snoopy.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <div className="app-content">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
