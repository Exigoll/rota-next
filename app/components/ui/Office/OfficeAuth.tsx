import { useRouter } from "next/navigation";
import {
	IconCart,
	IconExit,
	IconFavorite,
	IconOrders,
} from "@components/icons";
import styles from "./Office.module.scss";

export const OfficeAuth = () => {
	const router = useRouter();

	return (
		<div className={`${styles.office} ${styles.auth}`}>
			<button
				className={`${styles.btn} ${styles.btnOrders}`}
				onClick={() => router.push("./orders")}
			>
				<IconOrders className={styles.icon} />
			</button>
			<button className={styles.btn} onClick={() => router.push("./favorite")}>
				<IconFavorite className={styles.icon} />
			</button>
			<button className={styles.btn} onClick={() => router.push("./cart")}>
				<IconCart className={styles.icon} />
			</button>
			<button className={`${styles.btn} ${styles.btnExit}`}>
				<IconExit className={styles.icon} />
			</button>
		</div>
	);
};
