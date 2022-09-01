import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Navigation from './components/Navigation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Navigation/>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>
    
  )
}

export default App
