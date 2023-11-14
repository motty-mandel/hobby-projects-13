import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvidor } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import HomePage from "./pages/HomePage";
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>404 Not Found</h1>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'about-me',
                element: <AboutMe />
            },
            {
                path: 'portfolio',
                element: <Portfolio />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'resume',
                element: <Resume />
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvidor router={router} />
);