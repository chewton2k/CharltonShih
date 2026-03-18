import { Inter } from 'next/font/google';

import './globals.css';
import './components/Navbar.css';
import './components/Burger.css';
import './components/Footer.css';
import './components/Background.css';
import './components/SocialButtons.css';
import './components/Card.css';
import './styles/HomePage.css';
import './styles/AboutPage.css';
import './styles/ExperiencePage.css';
import './styles/ProjectsPage.css';
import './styles/PillPallPage.css';
import './styles/UCLADesignPage.css';
import './styles/BruinwalkPage.css';
import './styles/UCLAClubhousePage.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeProvider from './components/ThemeProvider';
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t)})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <div className="app-content">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
