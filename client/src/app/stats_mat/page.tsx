'use client';

import { useState } from 'react';
import '../css/stats_mat.css';

export default function MaTable() {
  const [selectedCategory, setSelectedCategory] = useState<'rendus' | 'non-rendus'>('non-rendus');

  const [data] = useState([
    {
      id: 1,
      date: '2025-05-16',
      matricule: '12345',
      nom: 'Jean Dupont',
      materiel: 'Ordinateur',
      heurePrise: '09:00',
      heureRetour: '17:00',
      rendu: true,
    },
    {
      id: 2,
      date: '2025-05-15',
      matricule: '67890',
      nom: 'Marie Curie',
      materiel: 'Projecteur',
      heurePrise: '10:30',
      heureRetour: '',
      rendu: false,
    },
  ]);

  const supprimerLigne = (id: number) => {
    alert(`Supprimer ligne ID: ${id}`);
    // you can implement setData() here if you make data mutable
  };

  const filteredData = data.filter((row) =>
    selectedCategory === 'rendus' ? row.rendu : !row.rendu
  );

  return (
    <div className="datatable-container">
      <h2>Table des Emprunts</h2>

      {/* Category Bar */}
      <div className="category-bar">
        <button
          className={selectedCategory === 'rendus' ? 'active' : ''}
          onClick={() => setSelectedCategory('rendus')}
        >
          Rendus
        </button>
        <button
          className={selectedCategory === 'non-rendus' ? 'active' : ''}
          onClick={() => setSelectedCategory('non-rendus')}
        >
          Non rendus
        </button>
      </div>

      {/* Table */}
      <table className="datatable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Matricule</th>
            <th>Nom</th>
            <th>Matériel</th>
            <th>Heure Prise</th>
            <th>Heure Retour</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.date}</td>
              <td>{row.matricule}</td>
              <td>{row.nom}</td>
              <td>{row.materiel}</td>
              <td>{row.heurePrise}</td>
              <td>{row.heureRetour || '-'}</td>
              <td>
                <button className="btn supprimer" onClick={() => supprimerLigne(row.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
