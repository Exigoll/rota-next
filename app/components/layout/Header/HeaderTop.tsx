"use client";

import { IconClose, IconHamburger, IconLogo } from "@components/icons";
import { NavBar } from "@components/ui/NavBar";

import styles from "./Header.module.scss";

export const HeaderTop = ({ openMenu, setOpenMenu }: any) => {
  return (
    <div className={styles.headerTop}>
      <div
        className={`${styles.headerTopWrapper} container`}
        onClick={(e) => e.stopPropagation()}
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
  );
};
