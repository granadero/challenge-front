import React from "react";
import styles from "./breadcrumb.module.scss";

const Breadcrumb = ({ categories }) => {
  return (
    <section className={styles.breadcrumbContainer}>
      <ul className={styles.breadcrumb}>
        {categories?.map((category, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {category.name}
            {index < categories.length - 1 && (
              <span className={styles.separator}>{">"}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Breadcrumb;
