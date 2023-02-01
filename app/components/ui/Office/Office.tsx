"use client";
import styles from "./Office.module.scss";
import { OfficeAuth } from "./OfficeAuth";
import { OfficeNotAuth } from "./OfficeNotAuth";

export const Office = () => {
	return (
		<>
			<OfficeNotAuth />
			{/* <OfficeAuth /> */}
		</>
	);
};
