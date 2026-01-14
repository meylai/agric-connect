import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [userType, setUserType] = useState('farmer');
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1>AgriConnect</h1>
      <p className="subtitle">Connecting Farmers & Buyers</p>

      <h3>I am a:</h3>

      <div className="role-container">
        <div
          className={`role-card ${userType === 'farmer' ? 'active-green' : ''}`}
          onClick={() => setUserType('farmer')}
        >
          🌾 Farmer
        </div>

        <div
          className={`role-card ${userType === 'buyer' ? 'active-blue' : ''}`}
          onClick={() => setUserType('buyer')}
        >
          🏪 Buyer
        </div>
      </div>

      <button
        className="primary-btn"
        onClick={() =>
          navigate(userType === 'farmer' ? '/farmer' : '/buyer')
        }
      >
        Continue
      </button>
    </div>
  );
}
