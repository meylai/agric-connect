export default function FarmerProfile() {
  return (
    <div className="page">
      <h2>My Profile</h2>

      <div className="list-card">
        <strong>Name:</strong> John Banda
      </div>

      <div className="list-card">
        <strong>Email:</strong> johnbanda@gmail.com
      </div>

      <div className="list-card">
        <strong>Farm Location:</strong> Kasungu, Malawi
      </div>

      <div className="list-card">
        <strong>Main Crops:</strong> Maize, Soybeans
      </div>

      <button>Edit Profile</button>
    </div>
  );
}
