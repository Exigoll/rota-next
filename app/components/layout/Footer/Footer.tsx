import { Login } from "@components/ui/LoginModal/LoginModal";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1>Footer</h1>
      <Login />
    </footer>
  );
};
