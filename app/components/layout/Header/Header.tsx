import styles from "./Header.module.scss";
import { HeaderTop } from "./HeaderTop";
import { HeaderBottom } from "./HeaderBottom";

export const Header = ({ openMenu, setOpenMenu }: any) => {
	return (
		<header className={styles.header}>
			<HeaderTop openMenu={openMenu} setOpenMenu={setOpenMenu} />
			<HeaderBottom />
		</header>
	);
};
