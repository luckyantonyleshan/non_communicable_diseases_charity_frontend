import React from 'react';
import '../styles/App.css';

const Learnpage = () => {
  const resources = [
    {
      id: 1,
      title: 'Understanding Diabetes',
      description: 'Explore the causes, symptoms, and prevention strategies for diabetes.',
      image: 'src/assets/diabetes.jpg'
    },
    {
      id: 2,
      title: 'Heart Disease Prevention',
      description: 'Learn effective methods to maintain heart health and prevent cardiovascular issues.',
      image: 'src/assets/Heart disease.jpg'
    },
    {
      id: 3,
      title: 'Cancer Awareness',
      description: 'Gain insights into various cancers and the importance of early detection.',
      image: 'src/assets/Cancer.jpg'
    }
  ];

  return (
    <div className="learn-container">
      <header className="learn-header">
        <h1>Learn About Non-Communicable Diseases</h1>
        <p className="intro-text">Discover essential knowledge to improve your health and awareness.</p>
      </header>
      <main className="learn-content">
        <div className="resource-grid">
          {resources.map(resource => (
            <div key={resource.id} className="resource-card">
              <img src={resource.image} alt={resource.title} className="resource-image" />
              <div className="card-content">
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
                <a href={`/learn/${resource.id}`} className="learn-link">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="learn-footer">
        <h3>More Resources</h3>
        <ul className="resource-list">
          <li><a href="#articles">Articles</a></li>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#guides">Guides</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Learnpage;
