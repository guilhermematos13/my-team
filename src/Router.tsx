import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { FormPage } from './pages/FormPage';
import { MyTeam } from './pages/MyTeam';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/team-select" element={<FormPage />} />
      <Route path="/my-team" element={<MyTeam />} />
    </Routes>
  );
}
