import {
	IconLogin,
	IconMail,
	IconPhone,
	IconRegistration,
} from "@components/icons";
import Link from "next/link";
import styles from "./Header.module.scss";

export const HeaderTools = () => {
	return (
		<div className={styles.bottom}>
			<div className={styles.bottom__container}></div>
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
		</div>
	);
};
