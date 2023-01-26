import styles from "./Navigation.module.scss";
import { NavigationDesktop } from "./NavigationDesktop";
import { NavigationMobile } from "./NavigationMobile";

export const Navigation = () => {
	return (
		<>
			<NavigationDesktop />
			<NavigationMobile />
		</>
	);
};
