import React from "react";
import styles from "@/styles/global.scss";
import SearchBox from "@/components/searchBox/searchBox";

export const metadata = {
  title: "MELI-Frontend App",
  description:
    "Test práctico para aspirantes al área de front-end de Mercado Libre.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <SearchBox />
        {children}
      </body>
    </html>
  );
}
