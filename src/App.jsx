
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Success from './components/Success'
import Error from './components/Error'
import ProtectedRoute from './ProtectedRoute'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/success' element={<ProtectedRoute element={<success />} />} />
      <Route path='/*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
