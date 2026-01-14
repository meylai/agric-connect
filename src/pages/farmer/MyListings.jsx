export default function MyListings() {
  const listings = [
    {
      crop: 'Maize',
      quantity: '500 kg',
      price: 'MWK 1,500/kg',
      status: 'Active'
    },
    {
      crop: 'Soybeans',
      quantity: '200 kg',
      price: 'MWK 2,200/kg',
      status: 'Sold'
    }
  ];

  return (
    <div className="page">
      <h2>My Listings</h2>

      {listings.map((l, i) => (
        <div key={i} className="list-card">
          <strong>{l.crop}</strong><br />
          Quantity: {l.quantity}<br />
          Price: {l.price}<br />
          Status: <b>{l.status}</b>
        </div>
      ))}
    </div>
  );
}
