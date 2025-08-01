import "../styles/App.css"

export default function LoadingSpinner({ size = "md", className = "" }) {
  return (
    <div className={`loading-spinner ${size} ${className}`}>
      <div className="spinner"></div>
    </div>
  )
}
