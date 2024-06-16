import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './views/Dashboard.jsx'
import './css/index.css'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {ContextProvider} from './context/ContextProvider.jsx'
function App() {
    useEffect(() => {
        document.title = "FanBase";
    }, []);

    return (
        <React.StrictMode>
            <ContextProvider>
                <RouterProvider router={router} />
            </ContextProvider>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
