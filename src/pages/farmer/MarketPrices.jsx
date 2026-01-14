export default function MarketPrices() {
  const prices = [
    { crop: 'Maize', price: 'MWK 1,450', market: 'Lilongwe' },
    { crop: 'Soybeans', price: 'MWK 2,180', market: 'Blantyre' }
  ];

  return (
    <div className="page">
      <h2>Market Prices</h2>
      {prices.map((p, i) => (
        <div key={i} className="list-card">
          <strong>{p.crop}</strong> – {p.price}
          <div>{p.market}</div>
        </div>
      ))}
    </div>
  );
}
