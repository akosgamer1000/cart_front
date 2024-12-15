import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/Cartcontex';
import { useUser } from '../context/Usercontext';



const Navbar: React.FC = () => {
    const { cart } = useCart();
    const { user } = useUser();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/prodlist">Product</Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                            Cart
                            {cart.length > 0 && (
                                <span className="badge bg-primary ml-1">
                                    {cart.length}
                                </span>
                            )}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>

                    {user ? (
                        <>
                            
                            <li className="nav-item">
                                 <Link className="nav-link" to="/logout">logout</Link>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    )}
                    <li className="nav-item">
                                <Link to="/profile" className="nav-link">Profile</Link>
                            </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
