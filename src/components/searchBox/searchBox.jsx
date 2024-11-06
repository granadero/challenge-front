"use client";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import logoML from "@/assets/logoML.png";
import searchIcon from "@/assets/magnifyingIcon.svg";
import Image from "next/image";
import stlyes from "./searchBox.module.scss";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const onSearch = () => {
    if (inputValue !== "") {
      router.push(`/items/?search=${inputValue}`);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSearch();
    }
  };
  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  return (
    <section className={stlyes.section}>
      <div className={stlyes.container}>
        <Image
          src={logoML}
          height={34}
          width={134}
          className={stlyes.logo}
          alt="Logo Mercado Libre"
        />
        <div className={stlyes.inputContainer}>
          <input
            type="text"
            placeholder="Buscar..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" onClick={() => onSearch()}>
            <Image src={searchIcon} alt="Botón buscar" width={16} height={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
