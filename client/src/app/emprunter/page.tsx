'use client'; // Required for client-side interactivity in App Router

import { useState } from 'react';
import '@/app/css/emprunter.css'; // Import the CSS file

interface FormData {
  matricule: string;
  nom: string;
  niveau: string;
  parcours: string;
  materiel: string[];
  localisation: string;
}

export default function EmprunterPage() {
  const [formData, setFormData] = useState<FormData>({
    matricule: '',
    nom: '',
    niveau: '',
    parcours: '',
    materiel: [],
    localisation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        materiel: checked
          ? [...prev.materiel, value]
          : prev.materiel.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Formulaire soumis avec succès !');
  };

  return (
    <div className="container">
      <h1>Formulaire d'Emprunt</h1>
      <form onSubmit={handleSubmit} className="form">
        {/* Row 1: Numéro matricule and Nom */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="matricule" className="required-label">Numéro matricule</label>
            <input
              type="text"
              id="matricule"
              name="matricule"
              value={formData.matricule}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
        </div>

        {/* Row 2: Niveau and Parcours */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="niveau">Niveau</label>
            <select
              id="niveau"
              name="niveau"
              value={formData.niveau}
              onChange={handleChange}
              required
              className="input"
            >
              <option value="">Sélectionner un niveau</option>
              <option value="L1">L1</option>
              <option value="L2">L2</option>
              <option value="L3">L3</option>
              <option value="M1">M1</option>
              <option value="M2">M2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="parcours">Parcours</label>
            <input
              type="text"
              id="parcours"
              name="parcours"
              value={formData.parcours}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
        </div>

        {/* Row 3: Localisation */}
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="localisation" className="required-label">Localisation</label>
            <input
              type="text"
              id="localisation"
              name="localisation"
              value={formData.localisation}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
        </div>

        {/* Matériel à emprunter (Checkbox List) */}
        <div className="form-group">
          <label className="required-label">Matériel à emprunter</label>
          <div className="checkbox-group">
            {['Ordinateur', 'Projecteur', 'Tableau', 'Outils'].map((item) => (
              <label key={item} className="checkbox-label">
                <input
                  type="checkbox"
                  name="materiel"
                  value={item}
                  checked={formData.materiel.includes(item)}
                  onChange={handleChange}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Valider Button */}
        <button type="submit" className="button">
          Valider
        </button>
      </form>
    </div>
  );
}
