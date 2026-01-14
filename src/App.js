import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import FarmerDashboard from './pages/farmer/FarmerDashboard';
import BuyerDashboard from './pages/buyer/BuyerDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/farmer/*" element={<FarmerDashboard />} />
        <Route path="/buyer/*" element={<BuyerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
