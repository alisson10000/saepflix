import React from 'react';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';

type VideosLayoutProps = {
  children: React.ReactNode;
};

const VideosLayout: React.FC<VideosLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full bg-gray-100 p-8">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default VideosLayout;
