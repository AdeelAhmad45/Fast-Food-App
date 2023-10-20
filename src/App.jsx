
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Success from './components/Success'
import Error from './components/Error'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/success' element={<Success />} />
      <Route path='/*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App