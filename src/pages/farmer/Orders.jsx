export default function Orders() {
  const orders = [
    {
      buyer: 'ABC Processors',
      crop: 'Maize',
      quantity: '50 kg',
      amount: 'MWK 75,000',
      status: 'Pending'
    },
    {
      buyer: 'GreenFoods Ltd',
      crop: 'Soybeans',
      quantity: '100 kg',
      amount: 'MWK 220,000',
      status: 'Completed'
    }
  ];

  return (
    <div className="page">
      <h2>Orders</h2>

      {orders.map((o, i) => (
        <div key={i} className="list-card">
          <strong>{o.crop}</strong><br />
          Buyer: {o.buyer}<br />
          Quantity: {o.quantity}<br />
          Amount: {o.amount}<br />
          Status: <b>{o.status}</b>
        </div>
      ))}
    </div>
  );
}
