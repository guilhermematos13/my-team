import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { FormPage } from './pages/FormPage';
import { MyTeam } from './pages/MyTeam';
import { useContext } from 'react';
import { MyTeamContext } from './context/MyTeamContext';

export function Router() {
    const { token } = useContext(MyTeamContext);

    function isAuth(element: JSX.Element) {
        const tokenStorage = localStorage.getItem('token');
        if (tokenStorage || token) {
            return element;
        }
        return <Navigate to="/" replace={true} />;
    }

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/selecao-time" element={isAuth(<FormPage />)} />
            <Route path="/meu-time" element={isAuth(<MyTeam />)} />
        </Routes>
    );
}
