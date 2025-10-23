"use client";

import Category from "@/components/Category/Category";
import categories from "../data/categoryData.json";
import "../components/Card/card.css";

export default function Home() {
  return (
    <div style={{ paddingTop: "3rem", backgroundColor: "rgb(16, 29, 42)" }}>
      <main className="app-body">
        {categories.map((category, index) =>
          category.list.length > 0 ? (
            <Category
              title={category.category_name}
              cards={category.list}
              key={index}
            />
          ) : null
        )}
      </main>
    </div>
  );
}
