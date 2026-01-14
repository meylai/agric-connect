export default function Purchases() {
  const purchases = [
    {
      item: 'Maize',
      quantity: '200 kg',
      price: 'MWK 300,000',
      farmer: 'John Banda'
    },
    {
      item: 'Soybeans',
      quantity: '100 kg',
      price: 'MWK 220,000',
      farmer: 'Mary Phiri'
    }
  ];

  return (
    <div className="page">
      <h2>My Purchases</h2>

      {purchases.map((p, i) => (
        <div key={i} className="list-card">
          <strong>{p.item}</strong><br />
          Quantity: {p.quantity}<br />
          Price: {p.price}<br />
          Farmer: {p.farmer}
        </div>
      ))}
    </div>
  );
}
