import styles from "./Header.module.scss";
import { HeaderTop } from "./HeaderTop";
import { HeaderBottom } from "./HeaderBottom";

export const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderTop />
			{/* <HeaderBottom /> */}
		</header>
	);
};
