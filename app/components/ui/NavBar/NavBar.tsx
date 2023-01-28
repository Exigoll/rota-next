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
				onClick={e => e.stopPropagation()}
			>
				{links.map(({ ...links }) => (
					<Link
						className={styles.link}
						key={links.id}
						href={links.path}
						onClick={() => setOpenMenu(!openMenu)}
					>
						{links.title}
					</Link>
				))}
			</nav>
		</>
	);
};
