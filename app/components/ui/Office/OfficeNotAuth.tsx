import { IconLogin, IconRegistration } from "@components/icons";
import { useRouter } from "next/navigation";
import styles from "./Office.module.scss";

export const OfficeNotAuth = () => {
	const router = useRouter();

	return (
		<div className={styles.office}>
			<button
				className={`${styles.btn} ${styles.btnRegistration}`}
				onClick={() => router.push("./registration")}
			>
				<IconLogin className={styles.icon} />
				<span>Регистрация</span>
			</button>
			<button className={`${styles.btn} ${styles.btnLogin}`}>
				<IconRegistration className={styles.icon} />
				<span>Войти</span>
			</button>
		</div>
	);
};
