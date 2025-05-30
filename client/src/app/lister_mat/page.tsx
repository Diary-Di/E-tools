'use client';
import React, { useState } from 'react';
import '../css/list_mat.css'; // Adjust the path as needed

const DataTable = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  // Example data (replace with real data)
  const data = [
    { id: 4, designation: "Item 4", effectif: 6, status: "Plus utilisés" },
    { id: 1, designation: "Item 1", effectif: 10, status: "Fonctionnel" },
    { id: 2, designation: "Item 2", effectif: 5, status: "En maintenance" },
    { id: 3, designation: "Item 3", effectif: 8, status: "Fonctionnel" },
  ];

  const filteredData = data.filter(item =>
    activeCategory === "Tous" || item.status === activeCategory
  );

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="datatable-container">
      <h1>Data Table</h1>

      {/* Category Bar */}
      <div className="category-bar">
        <button
          className={activeCategory === "Tous" ? "active" : ""}
          onClick={() => handleCategoryClick("Tous")}
        >
          Tous
        </button>
        <button
          className={activeCategory === "Plus utilisés" ? "active" : ""}
          onClick={() => handleCategoryClick("Plus utilisés")}
        >
          Plus utilisés
        </button>
        <button
          className={activeCategory === "Fonctionnel" ? "active" : ""}
          onClick={() => handleCategoryClick("Fonctionnel")}
        >
          Fonctionnel
        </button>
        <button
          className={activeCategory === "En maintenance" ? "active" : ""}
          onClick={() => handleCategoryClick("En maintenance")}
        >
          En maintenance
        </button>
      </div>

      {/* Table */}
      <table className="datatable">
        <thead>
          <tr>
            <th>Identifiant</th>
            <th>Designation</th>
            <th>Effectif</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.designation}</td>
              <td>{item.effectif}</td>
              <td>
                <button className="btn modifier">Modifier</button>
                <button className="btn supprimer">Supprimer</button>

                {/* Conditional rendering of the third action button */}
                {(activeCategory === "Tous" || activeCategory === "Plus utilisés") && (
                  <button className="btn entretenir">Entretenir</button>
                )}
                {activeCategory === "En maintenance" && (
                  <button className="btn entretenir">Valider</button>
                )}
                {/* No button for Fonctionnel */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
