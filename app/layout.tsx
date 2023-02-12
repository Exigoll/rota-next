"use client";

import { Footer } from "@components/layout/Footer";
import { Header } from "@components/layout/Header";
import { inter, roboto_mono } from "@utils/fonts";
import { useState } from "react";

import "./styles/globals.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <html lang="ru" className={`${roboto_mono.variable} ${inter.variable}`}>
      <head />
      <body>
        <div className="app" onClick={() => setOpenMenu(false)}>
          <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
