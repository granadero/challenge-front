import React from "react";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import styles from "./items.module.scss";

async function LayoutItems({ categories = [], children }) {
  return (
    <section className={styles.section}>
      <Breadcrumb categories={categories} />
      {children}
    </section>
  );
}
export default LayoutItems;
