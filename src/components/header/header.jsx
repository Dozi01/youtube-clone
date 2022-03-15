import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";

function Header(props) {
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    props.search(inputRef.current.value);
  };

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <FontAwesomeIcon className={styles.youtubeIcon} icon={faYoutube} />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          ref={inputRef}
          type="search"
          placeholder="Search..."
          id="search"
        />
        <button type="submit" className={styles.button}>
          <FontAwesomeIcon
            className={styles.searchIcon}
            icon={faMagnifyingGlass}
          />
        </button>
      </form>
    </header>
  );
}

export default Header;
