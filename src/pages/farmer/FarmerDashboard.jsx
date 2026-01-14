import { Routes, Route, NavLink } from 'react-router-dom';
import FarmerHome from './FarmerHome';
import AddListing from './AddListing';
import MarketPrices from './MarketPrices';
import MyListings from './MyListings';
import Orders from './Orders';
import Profile from './Profile';

export default function FarmerDashboard() {
  return (
    <div>
      <nav className="bottom-nav">
        <NavLink to="" end>Home</NavLink>
        <NavLink to="listings">Listings</NavLink>
        <NavLink to="orders">Orders</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </nav>

      <Routes>
        <Route index element={<FarmerHome />} />
        <Route path="listings" element={<MyListings />} />
        <Route path="orders" element={<Orders />} />
        <Route path="profile" element={<Profile />} />
        <Route path="add-listing" element={<AddListing />} />
        <Route path="market-prices" element={<MarketPrices />} />
      </Routes>
    </div>
  );
}
