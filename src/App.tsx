import { Routes, Route } from 'react-router-dom'
import Landing from './pages/FrontPorch/Landing'
import Login from './pages/FrontPorch/Login'
import Signup from './pages/FrontPorch/Signup'
import Dashboard from './pages/LivingRoom/Dashboard'
import NotFound from './pages/General/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
