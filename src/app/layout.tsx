import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Navbar from "./_components/Navbar";

// const openSans = Open_Sans({ subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Anges Vu",
  description: "Research Showcase",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className} id="home">
          <Navbar />
          {children}
          <script src="https://kit.fontawesome.com/5159edec0e.js" crossOrigin="anonymous"></script>
        </body>
    </html>
  );
}
