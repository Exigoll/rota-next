"use client";
import Link from "next/link";
import styles from "./Navigation.module.scss";

const links = [
	{ id: 0, title: "О нас", path: "/about" },
	{ id: 1, title: "Поставщикам", path: "/provider" },
	{ id: 2, title: "Оптовым клиентам", path: "/wholesale" },
	{ id: 3, title: "Контакты", path: "/contacts" },
];

export const NavigationLinks = (props: any) => {
	return (
		<>
			{links.map(({ ...links }) => (
				<Link
					className={styles.link}
					key={links.id}
					href={links.path}
					onClick={() => props.isMobile && props.closeMenu()}
				>
					{links.title}
				</Link>
			))}
		</>
	);
};
