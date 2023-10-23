import { createBrowserRouter } from "react-router-dom";
import Header from "../componts/Header";
import MainCard from '../componts/MainCard';
import KarteiForm from "../componts/KarteiForm";
import LoginCard from "../componts/LoginCard";
import StorageTest from "../componts/StorageTest";

// import RootElement from '../componts/Rootelement';


export const router = createBrowserRouter([
    {
        element: <Header/>,
        children: [
            {
                path: '/',
                element: <MainCard/>,
            },
            {
                path: '/karteiform',
                element: <KarteiForm/>,
            },
            {
                path: '/Logincard',
                element: <LoginCard/>,
            },
            {
                path: '/storagetest',
                element: <StorageTest/>,
            }

        ]
    }
])