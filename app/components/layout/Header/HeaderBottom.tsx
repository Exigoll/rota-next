import { Contacts } from "@components/ui/Contacts";
import { Search } from "@components/ui/Search";
import styles from "./Header.module.scss";

export const HeaderBottom = () => {
	return (
		<div className={styles.headerBottom}>
			<div className="container">
				<div className={styles.headerBottomWrapper}>
					<Contacts />
					<Search />
				</div>
			</div>
		</div>
	);
};
