import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FarmerDashboard from './pages/farmer/FarmerDashboard';
import BuyerDashboard from './pages/buyer/BuyerDashboard';
import Purchases from './pages/buyer/Purchases';
import BuyerProfile from './pages/buyer/profile';
import Browse from './pages/buyer/BrowseProduce';

import MyListings from './pages/farmer/MyListings';
import Orders from './pages/farmer/Orders';
import FarmerProfile from './pages/farmer/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/buyer" element={<BuyerDashboard />} />
      <Route path="/buyer/purchases" element={<Purchases />} />
      <Route path="/buyer/browse" element={<Browse />} />
      <Route path="/buyer/profile" element={<BuyerProfile />} />

      <Route path="/farmer" element={<FarmerDashboard />} />
      <Route path="/farmer/listings" element={<MyListings />} />
      <Route path="/farmer/orders" element={<Orders />} />
      <Route path="/farmer/profile" element={<FarmerProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
