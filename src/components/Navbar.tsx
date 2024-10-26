import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { OnUserStateChange, login, logout } from '../api/fbase-config.js';

export default function Navbar() {
    // set a user
    const [user, setUser] = useState();
    const handleLogin = () => {
        login().then(setUser);
    };
    const handleLogout = () => {
        logout().then(setUser);
    };
    useEffect(() => {
        OnUserStateChange((user) => {
            console.log(user);
            setUser(user);
        });
    }, []);

    return (
        <nav>
            <Link className="logo" to="/">
                OOA
                {/* <img src="./assets/ooa-log.svg" alt="ooa-logo" /> */}
            </Link>
            <menu>
                <Link className="button" to="/products">
                    All Products
                </Link>
                <Link className="button" to="/cart">
                    Bag
                </Link>
                <Link className="button" to="/products/addnew">
                    Edit
                </Link>
                {!user && (
                    <button onClick={handleLogin} className="button">
                        Login
                    </button>
                )}
                {user && (
                    <button onClick={handleLogout} className="button">
                        Logout
                    </button>
                )}
            </menu>
        </nav>
    );
}
