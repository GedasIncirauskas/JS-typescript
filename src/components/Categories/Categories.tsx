import React from "react";

interface CategoriesBarProps {
  list: { id: number; title: string; items: string[] }[];
  onListItemSelect: (id: number) => void;
  selectedItemId: number | undefined;
}

const CategoriesBar = ({
  list,
  onListItemSelect,
  selectedItemId,
}: CategoriesBarProps) => {
  return (
    <section className="categories">
      {list.map((item) => (
        <ul key={item.id} onClick={() => onListItemSelect(item.id)}>
          <li className={selectedItemId === item.id ? "active" : ""}>
            {item.title}
          </li>
        </ul>
      ))}
    </section>
  );
};

export default CategoriesBar;
