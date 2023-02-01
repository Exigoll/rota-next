"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./NavBar.module.scss";

const links = [
	{ id: 0, title: "Главная", path: "/" },
	{ id: 1, title: "О компании", path: "/about" },
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
						className={
							router == links.path
								? `${styles.linkActive} ${styles.link}`
								: styles.link
						}
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
