"use client";

import { IconLogin, IconRegistration } from "@components/icons";
import { LoginModal } from "@components/ui/LoginModal";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "./Office.module.scss";

export const OfficeNotAuth = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.office}>
        <button
          className="btnOffice btnOfficeLeft"
          onClick={() => router.push("./registration")}
        >
          <IconRegistration className={styles.icon} />
          <span className={styles.btnText}>Регистрация</span>
        </button>
        <button className="btnOffice btnOfficeRight" onClick={handleClickOpen}>
          <IconLogin className={styles.icon} />
          <span className={styles.btnText}>Войти</span>
        </button>
      </div>
      <LoginModal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </>
  );
};
