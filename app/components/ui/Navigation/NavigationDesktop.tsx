import { NavigationLinks } from "./NavigationLinks";
import styles from "./Navigation.module.scss";

export const NavigationDesktop = () => {
	return (
		<div className={styles.navigation}>
			<NavigationLinks />
		</div>
	);
};
