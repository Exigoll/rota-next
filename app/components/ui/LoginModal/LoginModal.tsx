"use client";
import Link from "next/link";
import styles from "./LoginModal.module.scss";

interface LoginModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export const LoginModal = ({ open, setOpen }: LoginModalProps) => {
	if (!open) return null;

	return (
		<div className={styles.modalOverlay} onClick={() => setOpen(false)}>
			<div className={styles.modal} onClick={e => e.stopPropagation()}>
				<h2 className="titleSection">Авторизация</h2>
				<form className={styles.modalForm}>
					<div className={styles.inputsContainer}>
						<div className={styles.input}>
							<input type="text" placeholder="Введите логин" />
						</div>
						<div className={styles.input}>
							<input type="password" placeholder="Введите пароль" />
						</div>
						<div className={styles.inputCheck}>
							<label htmlFor="checkbox">Запомнить меня</label>
							<input type="checkbox" name="checkbox" id="checkbox" />
						</div>
					</div>
					<div className={styles.buttonsContainer}>
						<button className="btn btn--peach" onClick={() => setOpen(false)}>
							<Link href="./registration">Регистрация</Link>
						</button>
						<button className="btn btn--blue">Вход</button>
					</div>
				</form>
				<Link
					href="./"
					className={styles.recovery}
					onClick={() => setOpen(false)}
				>
					Восстановить доступ к аккаунту
				</Link>
			</div>
		</div>
	);
};
