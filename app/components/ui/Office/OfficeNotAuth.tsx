"use client";
import { IconLogin, IconRegistration } from "@components/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoginModal } from "../LoginModal";
import styles from "./Office.module.scss";

export const OfficeNotAuth = () => {
	const router = useRouter();
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<div className={styles.office}>
				<button
					className={`${styles.btn} ${styles.btnRegistration}`}
					onClick={() => router.push("./registration")}
				>
					<IconRegistration className={styles.icon} />
					<span>Регистрация</span>
				</button>
				<button
					className={`${styles.btn} ${styles.btnLogin}`}
					onClick={() => setOpenModal(true)}
				>
					<IconLogin className={styles.icon} />
					<span>Войти</span>
				</button>
			</div>
			<LoginModal openPopup={openModal} setOpenPopup={setOpenModal} />
		</>
	);
};
