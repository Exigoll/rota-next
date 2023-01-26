"use client";
import { useState } from "react";
import { NavigationLinks } from "./NavigationLinks";
import { IconClose, IconHamburger } from "@components/icons";
import styles from "./Navigation.module.scss";

export const NavigationMobile = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const closeMenu = () => setOpenMenu(false);

	return (
		<>
			<div className={styles.navigationMobile}>
				{openMenu && (
					<div className={styles.navigationLinksWrapper}>
						<NavigationLinks isMobile={true} closeMenu={closeMenu} />
					</div>
				)}
			</div>
			{openMenu ? (
				<IconClose
					className={styles.icon}
					onClick={() => setOpenMenu(!openMenu)}
				/>
			) : (
				<IconHamburger
					className={styles.icon}
					onClick={() => setOpenMenu(!openMenu)}
				/>
			)}
		</>
	);
};
