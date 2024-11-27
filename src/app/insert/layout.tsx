import React from 'react';
import Header from '@/app/components/header/header';
import Insert from '@/app/insert/page';
import Footer from '@/app/components/footer/footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
        <Header />
        <Insert />
        <Footer />
    </>
  );
};

export default Layout;
