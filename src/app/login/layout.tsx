import React from 'react';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
