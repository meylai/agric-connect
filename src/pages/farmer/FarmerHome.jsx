import { useNavigate } from 'react-router-dom';

export default function FarmerHome() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="welcome-card green">
        <h2>Welcome back, John!</h2>
        <p>Ready to sell your produce?</p>
      </div>

      <h3>Quick Actions</h3>

      <div className="action-grid">
        <button onClick={() => navigate('add-listing')}>
          ➕ Add Listing
        </button>

        <button onClick={() => navigate('market-prices')}>
          📈 Market Prices
        </button>
      </div>
    </div>
  );
}
