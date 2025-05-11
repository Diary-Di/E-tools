'use client'

import { useState } from 'react'
import '@/app/css/inventorier.css'

export default function AjouterMateriel() {
  const [formData, setFormData] = useState({
    identifiant: '',
    designation: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your POST request here
  }

  return (
    <div className="form-container">
      <h1>Ajouter un matériel</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="identifiant">Identifiant du matériel</label>
          <input
            type="text"
            id="identifiant"
            name="identifiant"
            value={formData.identifiant}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Désignation du matériel</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}
