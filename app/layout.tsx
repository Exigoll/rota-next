"use client";
import { Header } from "@components/layout/Header";
import { Footer } from "@components/layout/Footer";
import { roboto_mono, inter } from "./supports/fonts";
import "./styles/globals.scss";
import { useState } from "react";

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<html lang="ru" className={`${inter.variable} ${roboto_mono.variable}`}>
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
