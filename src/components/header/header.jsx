import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <FontAwesomeIcon className={styles.youtubeIcon} icon={faYoutube} />
        <div className={styles.title}>Youtube</div>
      </div>
      <form className={styles.form}>
        <input
          className={styles.input}
          // ref={this.inputRef}
          type="text"
          placeholder="Search"
          id="name"
          name="name"
        />
        <button className={styles.button}>
          <FontAwesomeIcon
            className={styles.searchIcon}
            icon={faMagnifyingGlass}
          />
        </button>
      </form>
    </div>
  );
}

export default Header;
