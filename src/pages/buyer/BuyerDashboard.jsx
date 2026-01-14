// pages/buyer/BuyerDashboard.jsx
import { Routes, Route, NavLink } from 'react-router-dom';
import BuyerHome from './BuyerHome';
import BrowseProduce from './BrowseProduce';
import Purchases from './Purchases';
import Profile from './profile';
import './BuyerDashboard.css';

function BuyerDashboard() {
  return (
    <div className="dashboard">
      <h1>Buyer Dashboard</h1>

      <div className="dashboard-cards">
        <Link to="/buyer/purchases" className="card-link">
          <div className="card">My Purchases</div>
        </Link>

        <Link to="/buyer/browse" className="card-link">
          <div className="card">Browse Farmers</div>
        </Link>

        <Link to="/buyer/profile" className="card-link">
          <div className="card">My Profile</div>
        </Link>
      </div>
    </div>
  );
}

export default BuyerDashboard;

/*export default function BuyerDashboard() {
  return (
    <>
      <nav className="bottom-nav blue">
        <NavLink to="" end>Home</NavLink>
        <NavLink to="browse">Browse</NavLink>
        <NavLink to="purchases">Purchases</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </nav>

      <Routes>
        <Route index element={<BuyerHome />} />
        <Route path="browse" element={<BrowseProduce />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}*/
