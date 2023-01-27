"use client";
import Link from "next/link";
import styles from "./Navigation.module.scss";

const links = [
	{ id: 0, title: "Главная", path: "/" },
	{ id: 1, title: "О нас", path: "/about" },
	{ id: 2, title: "Поставщикам", path: "/provider" },
	{ id: 3, title: "Покупателям", path: "/wholesale" },
	{ id: 4, title: "Контакты", path: "/contacts" },
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
