import styles from "./Header.module.scss";
import { HeaderTop } from "./HeaderTop";
import { HeaderBottom } from "./HeaderBottom";

interface HeaderProps {
	openMenu: boolean;
	setOpenMenu: void;
}

export const Header = ({ openMenu, setOpenMenu }: HeaderProps) => {
	return (
		<header className={styles.header}>
			<HeaderTop openMenu={openMenu} setOpenMenu={setOpenMenu} />
			<HeaderBottom />
		</header>
	);
};
