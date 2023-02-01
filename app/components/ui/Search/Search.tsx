import styles from "./Search.module.scss";

export const Search = () => {
	return (
		<div className={styles.search}>
			<input type="text" placeholder="Введите VIN номер детали" />
			<button type="submit">Найти</button>
		</div>
	);
};
