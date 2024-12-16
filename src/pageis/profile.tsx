import { useState, useEffect } from 'react';
import { fetchProtected } from '../api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../componens/navbar';
import { useUserData } from '../context/Userdatacontex';

export  function Profile() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const{user,ids} =useUserData()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProtected();
        console.log(ids)
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
         <Navbar></Navbar>
    <h1>Profile Page</h1>
   
    {user ? (
        <div className="card p-4">
            <img className="card-img-top img-fluid " style={{width:100, height:100}} src="public/letöltés.png" alt="Card image cap"></img>
             <div className="card-body">
             <h2 >Welcome, {user.name}</h2 >
             <p><strong>Password:</strong> {user.password}</p>
             </div>
            
        </div>
    ) : (
        <div className="alert alert-warning">
            <p>You are not logged in.</p>
        </div>
    )}
</div>

  );
}
