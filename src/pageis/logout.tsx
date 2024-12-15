import { useEffect } from 'react';
import { logout } from '../api';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/Usercontext';

export function Logout() {
  const navigate = useNavigate();
  const {  logout1 } = useUser();
  useEffect(() => {
   
    const handleLogout = async () => {
      try {
        logout1()
        await logout();
        
        navigate('/login');  // Kijelentkezés után vissza a bejelentkezés oldalra
      } catch (error) {
        alert('Logout failed');
      }
    };

    handleLogout();
  }, [navigate]);

  return <h2>Logging out...</h2>;
}


