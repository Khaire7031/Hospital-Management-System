import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ramdom from '../Ramdom';
import AdminDashBoard from '../Layout/AdminDashBoard';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<PublicRoutes><LoginPage /></PublicRoutes>} />
                <Route path='/register' element={<PublicRoutes><RegisterPage /></PublicRoutes>} />
                <Route path='/' element={<ProtectedRoutes><AdminDashBoard /></ProtectedRoutes>}>
                    <Route path="**" element={<Ramdom />} />
                    <Route path="/dashboard" element={<Ramdom />} />
                    <Route path="/doctors" element={<Ramdom />} />
                    <Route path="/patients" element={<Ramdom />} />
                    <Route path="/appointments" element={<Ramdom />} />
                    <Route path="/pharmacy" element={<Ramdom />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
