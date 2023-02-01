import Link from "next/link";
import { IconMail, IconPhone } from "@components/icons";
import styles from "./Contacts.module.scss";

export const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<Link className={styles.link} href="tel:+79029999999">
				<IconPhone className={styles.icon} />
			</Link>
			<Link className={styles.link} href="mailto:info@rotazap.ru">
				<IconMail className={styles.icon} />
			</Link>
		</div>
	);
};
