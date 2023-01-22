import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";
import { Login, Logo, Mail, Phone, Registration } from "@/public/icons/index";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
	return (
		<header className={styles.header}>
			<HeaderMenu />
			{/* <div className={styles.bottom}>
				<div className={styles.bottom__container}>
					<div className={styles.contacts}>
						<Link className={styles.link} href="tel:+79029999999">
							<Phone className={styles.link__icon} />
							<p className={styles.link__text}>+7-902-99-99-999</p>
						</Link>
						<Link className={styles.link} href="mailto:info@rotazap.ru">
							<Mail className={styles.link__icon} />
							<p className={styles.link__text}>info@rotazap.ru</p>
						</Link>
					</div>
					<div className={styles.search}>
						<input type="text" placeholder="Введите VIN номер детали" />
						<button type="submit">Найти</button>
					</div>
					<div className={`${styles.office} ${styles.notAuth}`}>
						<button
							className={`${styles.officeBtn} ${styles.officeBtnLogin}`}
							data-path="popup-login"
						>
							<Login />
							<span>Вход</span>
						</button>

						<a
							className={`${styles.officeBtn} ${styles.officeBtnRegistration}`}
							href="./registration.html"
						>
							<Registration />
							<span>Регистрация</span>
						</a>
					</div>
					Офис авторизированного пользователя
					<div className="bottom-header__office office-header auth">
				<a className="office-btn office-btn&#45;&#45;orders" href="#">
					<svg><use xlink:href="./assets/img/icons/icons.svg#orders"></use></svg>
					<span>Заказы</span>
				</a>
				<a className="office-btn office-btn&#45;&#45;favorites" href="#">
					<svg><use xlink:href="./assets/img/icons/icons.svg#favorite"></use></svg>
					<span>Избранное</span>
				</a>
				<a className="office-btn office-btn&#45;&#45;cart" href="#">
					<svg><use xlink:href="./assets/img/icons/icons.svg#cart"></use></svg>
					<span>Корзина</span>
				</a>
				<a className="office-btn office-btn&#45;&#45;exit" href="#">
					<svg><use xlink:href="./assets/img/icons/icons.svg#exit"></use></svg>
					<span>Выход</span>
				</a>
			</div>
				</div>
				<div className="modal-overlay">
					<div className="modal" data-target="popup-login">
						<div className="modal__title title-modal">Авторизация</div>
						<form className="modal__form form-modal">
							<div className="form-modal__inputs inputs-modal">
								<div className="inputs-modal__input input-login">
									<label htmlFor="login"></label>
									<input
										type="text"
										name="login"
										id="login"
										placeholder="Введите логин"
									/>
								</div>
								<div className="inputs-modal__input input-password">
									<label htmlFor="password"></label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="Введите пароль"
									/>
								</div>
								<div className="input-checkbox">
									<label htmlFor="checkbox">Запомнить меня</label>
									<input type="checkbox" name="checkbox" id="checkbox" />
								</div>
							</div>
							<div className="form-modal__buttons buttons-modal">
								<button className="btn btn--peach">
									<a href="./registration.html"> Регистрация </a>
								</button>
								<button className="btn btn--blue">Вход</button>
							</div>
						</form>
						<a href="#" className="form-modal__recovery recovery-modal">
							Восстановить доступ к аккаунту
						</a>
					</div>
				</div>
			</div> */}
		</header>
	);
}
