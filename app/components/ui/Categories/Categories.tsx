import { categories } from "@store/categories";
import Link from "next/link";

import styles from "./Categories.module.scss";

export const Categories: React.FC = () => {
  return (
    <section className="section container">
      <div className={styles.categoryContainer}>
        {categories.map((obj) => (
          <Link href={obj.path} key={obj.id} className={styles.link}>
            {obj.icon}
            <h3>{obj.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
