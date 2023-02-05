import { useRouter } from "next/navigation";
import { IconArrowDownOffice, IconExit } from "@components/icons";
import styles from "./Office.module.scss";

export const OfficeAuth = () => {
	const router = useRouter();

	return (
		<div className={styles.office}>
			<div className={styles.btnOffice}>
				<button
					onClick={() => router.push("./office/cart")}
					className={styles.btnCart}
				>
					<span>В корзине 9 999 товаров</span>
					<span>на сумму: 9 999 999,00 руб.</span>
				</button>
				<button className={styles.btnMenu}>
					ООО &laquo;РОТА&raquo;
					<IconArrowDownOffice className={styles.icon} />
				</button>
			</div>
			<button className={`${styles.btn} ${styles.btnRight}`}>
				<IconExit className={styles.icon} />
				<span>Выйти</span>
			</button>
		</div>
	);
};
