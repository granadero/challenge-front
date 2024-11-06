"use client";
import React from "react";
import Image from "next/image";
import styles from "./listItems.module.scss";
import Link from "next/link";
import { formatCurrency } from "@/utils";

const ListItems = ({ items }) => {
  return (
    <section className={styles.section}>
      {items?.map((item) => (
        <Link key={item.id} href={`/items/${item.id}`}>
          <div className={styles.cardItem}>
            <div className={styles.divLeft}>
              <Image
                src={item.picture}
                height={160}
                width={160}
                alt="Logo Mercado Libre"
              />

              <div className={styles.priceAndTitle}>
                <div className={styles.price}>
                  {formatCurrency(
                    item.price.amount + item.price.decimals,
                    item.price.currency
                  )}
                </div>
                <div className={styles.title}>{item.title}</div>
              </div>
            </div>
            <div className={styles.divRight}>
              {item.condition === "new" ? "Nuevo" : "Usado"}
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ListItems;
