"use client";
import { useState } from "react";
import { IconClose, IconHamburger, IconLogo } from "@components/icons";
import { NavBar } from "@components/ui/NavBar/NavBar";
import styles from "./Header.module.scss";

export const HeaderTop = ({ openMenu, setOpenMenu }: any) => {
	return (
		<div className={styles.headerTop}>
			<div className="container">
				<div
					className={styles.headerTopWrapper}
					onClick={e => e.stopPropagation()}
				>
					<IconLogo className={styles.logo} />
					<NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
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
				</div>
			</div>
		</div>
	);
};
