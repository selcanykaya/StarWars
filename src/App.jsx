import { Routes, Route } from 'react-router-dom'
import StarshipsList from './pages/StarshipsList'
import StarshipDetail from './pages/StarshipDetail'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>STAR WARS STARSHIPS</h1>
      </header>
      <Routes>
        <Route path="/" element={<StarshipsList />} />
        <Route path="/starship/:id" element={<StarshipDetail />} />
      </Routes>
    </div>
  )
}

export default App
