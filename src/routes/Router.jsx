import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from '../pages/login.jsx'
import Test from '../pages/test.jsx'
export default function Router() {
  return (
    <Routes>

      <Route path="/Test" element={<Test />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
