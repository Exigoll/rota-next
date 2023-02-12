"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog, DialogActions } from "@mui/material";
import { LoginFormSchema } from "@utils/validation/LoginValidation";
import Link from "next/link";
import { useForm } from "react-hook-form";

import styles from "./LoginModal.module.scss";

interface ILoginModal {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
}

export const LoginModal: React.FC<ILoginModal> = ({ open, handleClose }) => {
  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = form.handleSubmit((data) => console.log(data));

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogActions className={styles.modal}>
          <h3 className="titleSection">Авторизация</h3>
          <form className={styles.modalForm}>
            <div className={styles.inputsContainer}>
              <div className={styles.input}>
                <input
                  {...form.register("email")}
                  type="email"
                  placeholder="Введите E-mail"
                />
              </div>
              <div className={styles.input}>
                <input
                  {...form.register("password")}
                  type="password"
                  placeholder="Введите пароль"
                />
              </div>
              <div className={styles.inputCheck}>
                <label htmlFor="checkbox">Запомнить меня</label>
                <input type="checkbox" name="checkbox" id="checkbox" />
              </div>
            </div>
            <div className={styles.buttonsContainer}>
              <button className="btn btn--peach" onClick={handleClose}>
                <Link href="./registration">Регистрация</Link>
              </button>
              <button
                onSubmit={onSubmit}
                className="btn btn--blue"
                type="submit"
              >
                Вход
              </button>
            </div>
          </form>
          <Link
            href="./recovery"
            className={styles.recovery}
            onClick={handleClose}
          >
            Восстановить доступ к аккаунту
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
};
