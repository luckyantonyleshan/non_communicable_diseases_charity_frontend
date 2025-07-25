import React from 'react';
import LearnCard from './Learncard';
// import '../../styles/App.css';
// import src/styles/App.css;

const Learnpage = () => {
  const learningResources = [
    {
      id: 1,
      title: 'Understanding Diabetes',
      description: 'Learn about the causes, symptoms, and prevention of diabetes.',
      icon: 'https://example.com/diabetes-icon.png'
    },
    {
      id: 2,
      title: 'Heart Disease Prevention',
      description: 'Discover ways to maintain a healthy heart and prevent cardiovascular diseases.',
      icon: 'https://example.com/heart-icon.png'
    },
    {
      id: 3,
      title: 'Cancer Awareness',
      description: 'Important information about different types of cancer and early detection.',
      icon: 'https://example.com/cancer-icon.png'
    }
  ];

  return (
    <div className="learn-page">
      <h1>Educational Resources</h1>
      <p className="page-description">
        Explore our collection of resources to learn more about non-communicable diseases.
      </p>
      
      <div className="resources-grid">
        {learningResources.map(resource => (
          <div key={resource.id} className="resource-card">
            <img src={resource.icon} alt={resource.title} className="resource-icon" />
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
      
      <section className="additional-resources">
        <h2>Additional Learning Materials</h2>
        <ul>
          <li><a href="#research-papers">Research Papers</a></li>
          <li><a href="#videos">Educational Videos</a></li>
          <li><a href="#faqs">Frequently Asked Questions</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Learnpage;