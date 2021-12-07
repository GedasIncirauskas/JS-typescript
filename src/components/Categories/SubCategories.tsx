import React, { useState } from "react";

interface SubCategoriesProps {
  subcategories: string[];
  searchText: string;
}

const SubCategories = ({ subcategories, searchText }: SubCategoriesProps) => {
  const [activeElement, setActiveElement] = useState<number[]>([]);

  const handleCheck = (index: number) => {
    if (activeElement.includes(index)) {
      return setActiveElement(activeElement.filter((item) => item !== index));
    } else {
      return setActiveElement([...activeElement, index]);
    }
  };

  return (
    <section className="sub">
      {subcategories.map((elements, index) => (
        <ul key={index}>
          <button onClick={() => handleCheck(index)}>Click</button>
          <li
            className={activeElement.includes(index) ? "active" : ""}
            dangerouslySetInnerHTML={{
              __html: elements.replaceAll(
                searchText,
                `<mark>${searchText}</mark>`
              ),
            }}
          ></li>
        </ul>
      ))}
    </section>
  );
};

export default SubCategories;
