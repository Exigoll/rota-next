"use client";
import Link from "next/link";
import { IconLogo } from "@components/icons";
import styles from "./Logo.module.scss";

export const Logo = (props: any) => {
	return (
		<>
			<Link
				className={styles.logo}
				href="/"
				onClick={() => props.isMobile && props.closeMenu()}
			>
				<IconLogo className={styles.logo__icon} />
			</Link>
		</>
	);
};
