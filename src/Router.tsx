import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { FormPage } from './pages/FormPage';
import { MyTeam } from './pages/MyTeam';

export function Router() {
  function isAuth(element: JSX.Element) {
    const tokenStorage = localStorage.getItem('token');
    if (tokenStorage) {
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
