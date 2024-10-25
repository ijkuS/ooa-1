import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Root() {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    );
}
