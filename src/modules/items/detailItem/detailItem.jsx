"use client";
import React from "react";
import Image from "next/image";
import styles from "./detailItem.module.scss";
import { formatCurrency } from "@/utils";

const DetailItem = ({ item }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageAndPrice}>
          <Image
            src={item.picture.url}
            height={500}
            width={360}
            alt={item.title}
          />

          <div className={styles.priceAndTitle}>
            <div className={styles.conditionAndSolds}>
              {item.condition} | {item.sold_quantity} vendidos
            </div>
            <h1 className={styles.title}>{item.title}</h1>
            <div className={styles.amount}>
              <h1 className={styles.price}>
                {formatCurrency(item.price.amount, item.price.currency)}
              </h1>
              {item.price.decimals !== 0 && (
                <h1 className={styles.decimals}>{item.price.decimals}</h1>
              )}
            </div>
            <button className={styles.button}>Comprar</button>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.description}>
          <h2 className={styles.titleDescription}>Descripción del producto</h2>
          <p className={styles.descriptionText}>{item.description}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailItem;
