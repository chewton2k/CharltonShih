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

export const metadata = {
  title: 'CharltonShih',
  icons: {
    icon: '/snoopy.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="app-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
