import { useState } from 'react';

export default function AddListing() {
  const [form, setForm] = useState({
    crop: '',
    quantity: '',
    price: '',
    location: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Listing created successfully!');
  };

  return (
    <div className="page">
      <h2>Add New Listing</h2>

      <form onSubmit={handleSubmit} className="form">
        <select
          required
          onChange={(e) => setForm({ ...form, crop: e.target.value })}
        >
          <option value="">Select Crop</option>
          <option>Maize</option>
          <option>Soybeans</option>
        </select>

        <input
          type="number"
          placeholder="Quantity (kg)"
          required
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price per kg (MWK)"
          required
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <input
          placeholder="Location"
          required
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <textarea
          placeholder="Description (optional)"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button type="submit" className="primary-btn">
          Create Listing
        </button>
      </form>
    </div>
  );
}
