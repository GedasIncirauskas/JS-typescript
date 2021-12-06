import React from "react";

const SearchBar = ({ value, change }: any) => {
  return (
    <section className="search_bar">
      <input
        type="search"
        placeholder="Search text"
        value={value}
        onChange={(e: any) => change(e.target.value)}
      />
    </section>
  );
};

export default SearchBar;
