import { useState, useEffect } from 'react';
import { fetchProtected } from '../api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../componens/navbar';

export  function Profile() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

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
    <div>
         <Navbar />
      <h2>Protected Page</h2>
      <p>{message}</p>
    </div>
  );
}
