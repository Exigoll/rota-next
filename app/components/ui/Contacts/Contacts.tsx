import { IconMail, IconPhone } from "@components/icons";
import Link from "next/link";
import styles from "./Contacts.module.scss";

export const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<Link className={styles.link} href="tel:+79029999999">
				<IconPhone className={styles.icon} />
				<p className={styles.text}>+7-902-99-99-999</p>
			</Link>
			<Link className={styles.link} href="mailto:info@rotazap.ru">
				<IconMail className={styles.icon} />
				<p className={styles.text}>info@rotazap.ru</p>
			</Link>
		</div>
	);
};
