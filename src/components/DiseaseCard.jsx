import { Link } from "react-router-dom"
import "../styles/App.css"

const DiseaseCard = ({ disease }) => {
  return (
    <div className="disease-card">
      <div className="card-header">
        <h3>{disease.name}</h3>
      </div>
      <div className="card-content">
        <p className="description">{disease.description}</p>
        <div className="meta-data">
          {disease.prevalence && <span className="prevalence-badge">{disease.prevalence}</span>}
          {disease.link ? (
            <a href={disease.link} target="_blank" rel="noopener noreferrer" className="details-link external-link">
              Learn more →
            </a>
          ) : disease.id ? (
            <Link to={`/diseases/${disease.id}`} className="details-link">
              View Details →
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default DiseaseCard
