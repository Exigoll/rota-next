"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
	const router = usePathname();

	return (
		<>
			<nav
				className={openMenu ? styles.menuMobile : styles.menu}
				onClick={e => e.stopPropagation()}
			>
				{links.map(({ ...links }) => (
					<Link
						className={router == links.path ? styles.linkActive : styles.link}
						/* className={router === styles.link : styles.linkActive} */
						key={links.id}
						href={links.path}
						onClick={() => setOpenMenu(false)}
					>
						{links.title}
					</Link>
				))}
			</nav>
		</>
	);
};
