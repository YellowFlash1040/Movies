import React, { useState } from "react";

import styles from "./SearchForm.module.css";

const SearchForm = ({ submit }) => {
  const [query, setQuery] = useState("");

  const handleFormSubmit = event => {
    event.preventDefault();
    submit(query);
    setQuery("");
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        type='text'
        value={query}
        onChange={event => setQuery(event.target.value)}
        style={{ width: "300px" }}
        placeholder='Search for something...'
      />
      <button className={styles.searchButton}>Search</button>
    </form>
  );
};

export default SearchForm;
