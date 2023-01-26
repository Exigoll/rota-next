"use client";
import { Logo } from "@components/ui/Logo";
import { Navigation } from "@components/ui/Navigation";
import styles from "./Header.module.scss";

export const HeaderTop = () => {
	return (
		<div className={styles.header__top}>
			<div className="container">
				<nav className={styles.menu}>
					<Logo />
					<Navigation />
				</nav>
			</div>
		</div>
	);
};
