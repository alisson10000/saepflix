import type { Metadata } from "next";
import "@/app/globals.css";
import "../../public/styles/main.css";
import { cairo } from '@/app/fonts';
import Script from 'next/script';
import '../../public/styles/jquerygrid.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const metadata: Metadata = {
  title: "SaepFlix",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        {/* JQUERY */}
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${cairo.className} antialiased p-0 m-0 box-border text-main-size text-text-color`}>
        {children}
        
      </body>
    </html>
  );
}
