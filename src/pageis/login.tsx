import { useState } from 'react';
import { login } from '../api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../componens/navbar';
import { useUser } from '../context/Usercontext';

export function LoginPage() {
 const {  login1} = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await login(username, password);
      login1(true)
      navigate('/profile'); // Sikeres bejelentkezés után navigálás a privát oldalra
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
         <Navbar  />
      <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
  );
}