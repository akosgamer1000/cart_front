import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProtected } from '../api';
import Navbar from '../componens/navbar';
import { useUserData } from '../context/Userdatacontex';

export function Profile() {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { user, ids, updateUsername, updatePassord } = useUserData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProtected();
        setMessage(response.message);
      } catch (error) {
        setMessage('Unauthorized');
        navigate('/login');
      }
    };
    fetchData();
  }, [navigate]);





  return (
    <div className="container mt-5">
      <Navbar />
      <h1>Profile Page</h1>

      {user ? (
        <>
          <div className="card p-4">
            <img
              className="card-img-top img-fluid"
              style={{ width: 100, height: 100 }}
              src="/letöltés.png"
              alt="Profile"
            />
            <div className="card-body">
              <h2>Welcome, {user.name}</h2>
              <p><strong>Password:</strong> {user.password}</p>
            </div>
          </div>

          <div className="container mt-3">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => updateUsername(username, ids)}
                  >
                    Update Username
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => updatePassord(password, ids)}
                  >
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="alert alert-warning">
          <p>You are not logged in.</p>
        </div>
      )}
    </div>
  );
}