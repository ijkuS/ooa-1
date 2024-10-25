import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import NotFound from './pages/NotFound';
import AllProducts from './pages/AllProducts';
import AddNewPage from './pages/AddNewPage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <App /> },
            { path: './products', element: <AllProducts /> },
            { path: './products/addnew', element: <AddNewPage /> },
            { path: './products/:productId', element: <ProductDetail /> },
            { path: './cart', element: <Cart /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
