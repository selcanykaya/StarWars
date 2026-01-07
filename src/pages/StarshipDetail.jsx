import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './StarshipDetail.css'

function StarshipDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [starship, setStarship] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchStarshipDetail()
  }, [id])

  const fetchStarshipDetail = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`https://swapi.py4e.com/api/starships/${id}/`)
      if (!response.ok) {
        throw new Error('Yıldız gemisi detayları yüklenirken bir hata oluştu')
      }
      const data = await response.json()
      setStarship(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoBack = () => {
    navigate('/')
  }

  if (loading) {
    return (
      <div className="detail-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Yükleniyor...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="detail-container">
        <div className="error-message">{error}</div>
        <button className="back-btn" onClick={handleGoBack}>
          ← Ana Sayfaya Dön
        </button>
      </div>
    )
  }

  if (!starship) {
    return (
      <div className="detail-container">
        <div className="error-message">Yıldız gemisi bulunamadı</div>
        <button className="back-btn" onClick={handleGoBack}>
          ← Ana Sayfaya Dön
        </button>
      </div>
    )
  }

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={handleGoBack}>
        ← Ana Sayfaya Dön
      </button>

      <div className="detail-card">
        <div className="detail-header">
          <h2 className="detail-title">{starship.name}</h2>
          <p className="detail-model">{starship.model}</p>
        </div>

        <div className="detail-content">
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Ad:</span>
              <span className="detail-value">{starship.name}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Model:</span>
              <span className="detail-value">{starship.model}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Yolcu Sayısı:</span>
              <span className="detail-value">{starship.passengers}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Atmosferdeki Maksimum Hız:</span>
              <span className="detail-value">{starship.max_atmosphering_speed}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Üretici:</span>
              <span className="detail-value">{starship.manufacturer}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Mürettebat:</span>
              <span className="detail-value">{starship.crew}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Kargo Kapasitesi:</span>
              <span className="detail-value">{starship.cargo_capacity}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Uzunluk:</span>
              <span className="detail-value">{starship.length} m</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Maliyet:</span>
              <span className="detail-value">{starship.cost_in_credits} credits</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Sınıf:</span>
              <span className="detail-value">{starship.starship_class}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Hipersürücü Derecesi:</span>
              <span className="detail-value">{starship.hyperdrive_rating}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">MGLT:</span>
              <span className="detail-value">{starship.MGLT}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StarshipDetail
