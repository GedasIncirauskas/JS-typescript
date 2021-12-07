import React, { useState } from "react";
import { data } from "./data";
import SearchBar from "./components/Search/Search";
import CategoriesBar from "./components/Categories/Categories";
import SubCategories from "./components/Categories/SubCategories";
import "./App.css";

const App = () => {
  const [selectItemId, setSelectItemId] = useState<number>();
  const [searchText, setSearchText] = useState<string>("");

  const activeCategory = data.find((item) => item.id === selectItemId);

  return (
    <div className="container">
      <SearchBar value={searchText} change={setSearchText} />
      <main className="wrapper">
        <CategoriesBar
          list={data}
          selectedItemId={selectItemId}
          onListItemSelect={(itemId) => setSelectItemId(itemId)}
        />
        <SubCategories
          key={selectItemId}
          subcategories={
            activeCategory
              ? activeCategory.items.filter((item) => item.includes(searchText))
              : []
          }
          searchText={searchText}
        />
      </main>
    </div>
  );
};

export default App;
