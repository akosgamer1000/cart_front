import { useState } from 'react';
import { login } from '../api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../componens/navbar';
import { useUser } from '../context/Usercontext';
import { useUserData } from '../context/Userdatacontex';

export function LoginPage() {
    const { login1 } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const{setData,idgetter,ids}=useUserData()

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            
           await  idgetter(username)
          
            await login(username, password);
            console.log(ids)
            setData({
              id:ids,
              name:username,
              password:password
            })
            login1(true);
            navigate('/profile');
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit} className="w-50 mx-auto">
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}