import { Logo } from "@/public/icons";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

export default function HeaderMenu() {
	return (
		<div className={styles.menu}>
			<div className="container">
				<div className={styles.menu__wrapper}>
					<Link className={styles.logo} href="/">
						<Logo className={styles.logo__img} />
						<h1 className={styles.logo__title}>Rota-ZAP</h1>
					</Link>
					<div className={styles.navigation}>
						<div className={styles.navigation__icon}>
							<span></span>
						</div>
						<nav className={styles.menu}>
							<ul className={styles.menu__list}>
								<li className={styles.menu__item}>
									<Link className={styles.menu__link} href="./">
										Главная
									</Link>
								</li>
								<li className={styles.menu__item}>
									<Link className={styles.menu__link} href="./about">
										О нас
									</Link>
								</li>
								<li className={styles.menu__item}>
									<Link className={styles.menu__link} href="./provider">
										Поставщикам
									</Link>
								</li>
								<li className={styles.menu__item}>
									<Link className={styles.menu__link} href="./wholesale">
										Оптовым клиентам
									</Link>
								</li>
								<li className={styles.menu__item}>
									<Link className={styles.menu__link} href="./contacts">
										Контакты
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}
