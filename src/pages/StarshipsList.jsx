import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './StarshipsList.css'

function StarshipsList() {
  const [starships, setStarships] = useState([])
  const [filteredStarships, setFilteredStarships] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [nextPage, setNextPage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  // İlk yüklemede starships'i getir
  useEffect(() => {
    fetchStarships('https://swapi.py4e.com/api/starships/')
  }, [])

  // Arama terimi değiştiğinde filtreleme yap
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredStarships(starships)
    } else {
      const filtered = starships.filter(ship =>
        ship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ship.model.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredStarships(filtered)
    }
  }, [searchTerm, starships])

  const fetchStarships = async (url) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Veri yüklenirken bir hata oluştu')
      }
      const data = await response.json()
      setStarships(prev => [...prev, ...data.results])
      setNextPage(data.next)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLoadMore = () => {
    if (nextPage) {
      fetchStarships(nextPage)
    }
  }

  const handleStarshipClick = (url) => {
    // URL'den ID'yi çıkar (örn: https://swapi.dev/api/starships/9/ -> 9)
    const id = url.split('/').filter(Boolean).pop()
    navigate(`/starship/${id}`)
  }

  const getStarshipId = (url) => {
    return url.split('/').filter(Boolean).pop()
  }

  return (
    <div className="starships-container">
      <div className="search-section">
        <input
          type="text"
          className="search-input"
          placeholder="Yıldız gemisi adı veya model ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="starships-grid">
        {filteredStarships.map((starship) => (
          <div
            key={getStarshipId(starship.url)}
            className="starship-card"
            onClick={() => handleStarshipClick(starship.url)}
          >
            <h3 className="starship-name">{starship.name}</h3>
            <div className="starship-info">
              <p><strong>Model:</strong> {starship.model}</p>
              <p><strong>Maksimum Hız:</strong> {starship.max_atmosphering_speed}</p>
            </div>
            <div className="card-footer">
              <span className="view-details">Detayları Gör →</span>
            </div>
          </div>
        ))}
      </div>

      {filteredStarships.length === 0 && !loading && (
        <div className="no-results">
          {searchTerm ? 'Arama sonucu bulunamadı' : 'Yıldız gemisi bulunamadı'}
        </div>
      )}

      {nextPage && searchTerm === '' && (
        <div className="load-more-section">
          <button
            className="load-more-btn"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? 'Yükleniyor...' : 'Daha Fazla Yükle'}
          </button>
        </div>
      )}

      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  )
}

export default StarshipsList
