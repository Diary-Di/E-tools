'use client';
import React, { useState } from 'react';
import '../css/list_mat.css'; // Adjust the path as needed

const sampleData = [
  { id: 1, designation: 'Ordinateur Portable', effectif: 12 },
  { id: 2, designation: 'Imprimante', effectif: 5 },
  { id: 3, designation: 'Projecteur', effectif: 3 },
];

export default function DataTable() {
  return (
    <div className="datatable-container">
      <h1>Liste du Matériel</h1>
      <table className="datatable">
        <thead>
          <tr>
            <th>Identifiant</th>
            <th>Désignation</th>
            <th>Effectif</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.designation}</td>
              <td>{item.effectif}</td>
              <td className="actions">
                <button className="btn modifier">Modifier</button>
                <button className="btn supprimer">Supprimer</button>
                <button className="btn entretenir">Entretenir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
