'use client';
import React, { useState } from 'react';
import '../css/ajout.css'; // Adjust path if needed

export default function AjouterPage() {
  const [formData, setFormData] = useState({
    identifiant: '',
    designation: '',
    fournisseur: '',
    dateReception: '',
    quantite: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // TODO: Add API submission or local storage logic here
    alert('Formulaire soumis avec succès !');
  };

  return (
    <div className="form-container">
      <h2>Réception du Matériel</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Identifiant du matériel
          <input
            type="text"
            name="identifiant"
            value={formData.identifiant}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Désignation du matériel
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Fournisseur du matériel
          <input
            type="text"
            name="fournisseur"
            value={formData.fournisseur}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date de réception
          <input
            type="date"
            name="dateReception"
            value={formData.dateReception}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Quantité reçue
          <input
            type="number"
            name="quantite"
            value={formData.quantite}
            onChange={handleChange}
            min="1"
            required
          />
        </label>

        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
