import React from "react";

interface SubCategoriesProps {
  subcategories: string[];
  searchText: string;
}

const SubCategories = ({ subcategories, searchText }: SubCategoriesProps) => {
  return (
    <section className="sub">
      {subcategories.map((elements, index) => (
        <ul key={index}>
          <li
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
