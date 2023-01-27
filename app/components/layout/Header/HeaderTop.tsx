"use client";
import { useState } from "react";
import { IconLogo } from "@components/icons";
import { NavBar } from "@components/ui/NavBar/NavBar";
import styles from "./Header.module.scss";

export const HeaderTop = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className={styles.headerTop}>
			<div className="container">
				<div
					className={styles.headerTopWrapper}
					onClick={e => e.stopPropagation()}
				>
					<IconLogo className={styles.logo} />
					<NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
				</div>
			</div>
		</div>
	);
};
