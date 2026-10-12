function Admin() {
  return (
    <div className="page-box">
      <h1>Welcome to Admin Page 🎮</h1>

      <p>
        You are logged in as the Gaming Tournament Administrator.
      </p>

      <div className="admin-grid">
        <div className="card">
          <h3>🏆 Manage Tournaments</h3>
          <p>Create and organize tournaments.</p>
        </div>

        <div className="card">
          <h3>👥 Manage Players</h3>
          <p>View registered players.</p>
        </div>

        <div className="card">
          <h3>🎁 Manage Prizes</h3>
          <p>View and organize prize details.</p>
        </div>
      </div>
    </div>
  );
}

export default Admin;