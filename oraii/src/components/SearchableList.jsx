import { useState } from "react";

function SearchableList() {
  const [query, setQuery] = useState("");
  const fruits = ["Alma", "Banán", "Narancs", "Eper", "Szőlő"];
  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLocaleLowerCase("hu").includes(query.toLocaleLowerCase("hu")),
  );

  return (
    <div className="stack">
      <label className="field-label" htmlFor="fruit-search">
        Gyümölcs keresése
      </label>
      <input
        id="fruit-search"
        className="text-input"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Pl. alma"
      />
      {filteredFruits.length > 0 ? (
        <ul className="food-list search-results">
          {filteredFruits.map((fruit) => (
            <li key={fruit}>
              <span className="list-mark" />
              {fruit}
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">Nincs találat erre: „{query}”</p>
      )}
    </div>
  );
}

export default SearchableList;
