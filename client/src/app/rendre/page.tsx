import React from "react";
import "@/app/css/rendre.css"; // Adjust the path as needed

export default function RendrePage() {
  // Sample data (replace with dynamic data if needed)
  const emprunts = [
    {
      date: "2025-05-07",
      heure: "10:00",
      matricule: "A12345",
      nom: "Jean Dupont",
      materiel: "Ordinateur portable",
    },
    {
      date: "2025-05-06",
      heure: "14:30",
      matricule: "B67890",
      nom: "Marie Curie",
      materiel: "Projecteur",
    },
  ];

  return (
    <div className="rendre-wrapper">
      <h1>Liste des emprunts non rendus</h1>
      <table className="rendre-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Heure d'emprunt</th>
            <th>Matricule</th>
            <th>Nom</th>
            <th>Matériel emprunté</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {emprunts.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.heure}</td>
              <td>{item.matricule}</td>
              <td>{item.nom}</td>
              <td>{item.materiel}</td>
              <td>
                <button className="text-btn modifier">Modifier</button>
                <button className="text-btn rendre">Rendre</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
