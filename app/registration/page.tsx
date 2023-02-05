import styles from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
	return (
		<section>
			<div className="container">
				<div className={styles.registrationWrapper}>
					<h2 className="titleSection">Регистрация</h2>
					<form className={styles.form}>
						<div className={styles.inputsContainer}>
							<div className={styles.input}>
								<label htmlFor="registration-email">
									E-mail <span>*</span>
								</label>
								<input
									type="email"
									name="registration-email"
									id="registration-email"
									placeholder="Введите e-mail"
								/>
							</div>
							<div className={styles.input}>
								<label htmlFor="registration-name">
									Ф.И.О. <span>*</span>
								</label>
								<input
									type="name"
									name="registration-name"
									id="registration-name"
									placeholder="Введите Ф.И.О."
								/>
							</div>
							<div className={styles.input}>
								<label htmlFor="registration-tel">
									Номер телефона <span>*</span>
								</label>
								<input
									type="tel"
									name="registration-tel"
									id="registration-tel"
									placeholder="Введите номер телефона"
								/>
							</div>
							<div className={styles.input}>
								<label htmlFor="registration-tel-additional">
									Доп. номер телефона <span>*</span>
								</label>
								<input
									type="tel"
									name="registration-tel-additional"
									id="registration-tel-additional"
									placeholder="Введите номер телефона"
								/>
							</div>
							<div className={styles.input}>
								<label htmlFor="registration-organization">
									Организационно-правовая форма <span>*</span>
								</label>
								<select
									name="registration-organization"
									id="registration-organization"
								>
									<option value="0">&#60;Выберите&#62;</option>
									<option value="1">ООО</option>
									<option value="2">ИП</option>
								</select>
							</div>
							<div className={styles.input}>
								<label htmlFor="registration-activity">
									Сфера деятельности <span>*</span>
								</label>
								<select name="registration-activity" id="registration-activity">
									<option value="0">&#60;Выберите&#62;</option>
									<option value="1">Интернет-магазин</option>
									<option value="2">СТО</option>
									<option value="3">Розничный магазин</option>
									<option value="4">Прочее</option>
								</select>
							</div>
							<div className={styles.input}>
								<label htmlFor="registration-login">
									Логин (имя пользователя) <span>*</span>
								</label>
								<input
									type="text"
									name="registration-login"
									id="registration-login"
									placeholder="Введите логин"
								/>
							</div>
							<div className={styles.input}>
								<label htmlFor="registration-password">
									Пароль <span>*</span>
								</label>
								<input
									type="password"
									name="registration-password"
									id="registration-password"
									placeholder="Введите пароль"
								/>
							</div>
							<div className={styles.input}>
								<label htmlFor="registration-password-repeated">
									Повторите пароль <span>*</span>
								</label>
								<input
									type="password"
									name="registration-password-repeated"
									id="registration-password-repeated"
									placeholder="Введите пароль"
								/>
							</div>
							<div className={styles.input}>
								<label htmlFor="registration-delivery">
									Адрес доставки <span>*</span>
								</label>
								<input
									type="text"
									name="registration-delivery"
									id="registration-delivery"
									placeholder="Индекс, регион, город, улица, № помещения"
								/>
							</div>
							<div className={styles.checkboxContainer}>
								<div className={styles.checkbox}>
									<label htmlFor="registration-checkbox-data">
										Согласие на обработку перс. данных
									</label>
									<input
										type="checkbox"
										name="registration-checkbox-data"
										id="registration-checkbox-data"
									/>
								</div>
								<div className={styles.checkbox}>
									<label htmlFor="registration-checkbox-confirm">
										Подтверждение регистрации
									</label>
									<input
										type="checkbox"
										name="registration-checkbox-confirm"
										id="registration-checkbox-confirm"
									/>
								</div>
							</div>
						</div>
						<div className="htmlForm-registration__buttons buttons-registration">
							<button className="btn btn--peach" type="submit">
								Регистрация
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default RegistrationPage;
