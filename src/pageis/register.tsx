import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api";
import Navbar from "../componens/navbar";


export function Reg() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      try {
        await register(username, password);
        navigate('/profile');  // Sikeres regisztráció után navigálás a privát oldalra
      } catch (error) {
        alert('Registration failed');
      }
    };
  
    return (
        
      <form onSubmit={handleSubmit}>
        <Navbar />
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    );
  }