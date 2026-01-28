import { Routes, Route } from 'react-router-dom'
import Landing from './pages/frontPorch/Landing'
import Login from './pages/frontPorch/Login'
import Signup from './pages/frontPorch/Signup'
import Dashboard from './pages/livingRoom/Dashboard'
import Preview from '@/pages/frontPorch/Preview'
import NotFound from './pages/general/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="preview" element={<Preview />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
