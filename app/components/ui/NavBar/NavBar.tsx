"use client";
import Link from "next/link";
import styles from "./NavBar.module.scss";
import { IconClose, IconHamburger } from "@components/icons";

const links = [
	{ id: 0, title: "Главная", path: "/" },
	{ id: 1, title: "О нас", path: "/about" },
	{ id: 2, title: "Поставщикам", path: "/provider" },
	{ id: 3, title: "Покупателям", path: "/wholesale" },
	{ id: 4, title: "Контакты", path: "/contacts" },
];

export const NavBar = ({ openMenu, setOpenMenu }: any) => {
	return (
		<>
			<nav
				className={openMenu ? styles.menuMobile : styles.menu}
				onClick={() => setOpenMenu(false)}
			>
				{links.map(({ ...links }) => (
					<Link className={styles.link} key={links.id} href={links.path}>
						{links.title}
					</Link>
				))}
			</nav>
			{openMenu ? (
				<IconClose
					className={styles.icon}
					onClick={() => setOpenMenu(!openMenu)}
				/>
			) : (
				<IconHamburger
					className={styles.icon}
					onClick={() => setOpenMenu(!openMenu)}
				/>
			)}
		</>
	);
};
