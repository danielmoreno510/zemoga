import type { ReactElement } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Template: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-140px)] mb-12">{children}</div>
      <Footer />
    </div>
  );
};

export default Template;
