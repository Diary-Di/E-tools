'use client';

import { useState } from 'react';
import '../css/emprunter.css';

export default function EmprunterPage() {
  const [formData, setFormData] = useState({
    matricule: '',
    nom: '',
    niveau: '',
    parcours: '',
    localisation: '',
    materiel: [],
  });

  const materielOptions = [
    'Ordinateur', 'Projecteur', 'Tablette',
    'Microphone', 'Casque', 'Clé USB',
    'Caméra', 'Imprimante', 'Autre'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        materiel: checked
          ? [...prev.materiel, value]
          : prev.materiel.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  const isFormValid =
    formData.matricule.trim() &&
    formData.nom.trim() &&
    formData.niveau.trim() &&
    formData.parcours.trim() &&
    formData.localisation.trim() &&
    formData.materiel.length > 0;

  return (
    <div className="form-container">
      <h2>Formulaire d'emprunt de matériel</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="matricule" className="form-label">Matricule de l'étudiant</label>
            <input
              type="text"
              id="matricule"
              name="matricule"
              value={formData.matricule}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nom" className="form-label">Nom de l'étudiant</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="niveau" className="form-label">Niveau</label>
            <input
              type="text"
              id="niveau"
              name="niveau"
              value={formData.niveau}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="parcours" className="form-label">Parcours</label>
            <input
              type="text"
              id="parcours"
              name="parcours"
              value={formData.parcours}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="localisation" className="form-label">Localisation</label>
            <input
              type="text"
              id="localisation"
              name="localisation"
              value={formData.localisation}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="checkbox-section">
          <h3>Matériel à emprunter</h3>
          <div className="checkbox-grid">
            {materielOptions.map((item) => (
              <label key={item} className="checkbox-item">
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

        {isFormValid && (
          <button type="submit" className="submit-button">Soumettre</button>
        )}
      </form>
    </div>
  );
}
