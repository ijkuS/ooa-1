import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link className="logo" to="/">
                <h2>OOA</h2>
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
                <a className="button">SIGN IN</a>
            </menu>
        </nav>
    );
}
