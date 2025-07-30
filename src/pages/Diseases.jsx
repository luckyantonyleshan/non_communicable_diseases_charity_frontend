import React from "react";

const diseases = [
  {
    name: "HIV/AIDS",
    description: "A virus that attacks the immune system, increasing vulnerability to other infections.",
    prevalence: "38 million people globally",
    link: "https://www.who.int/news-room/fact-sheets/detail/hiv-aids",
  },
  {
    name: "Tuberculosis (TB)",
    description: "A bacterial infection that mainly affects the lungs but can impact other organs.",
    prevalence: "10.6 million cases in 2022",
    link: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis",
  },
  {
    name: "Malaria",
    description: "A parasitic infection spread by mosquitoes, common in tropical and subtropical regions.",
    prevalence: "249 million cases in 2022",
    link: "https://www.who.int/news-room/fact-sheets/detail/malaria",
  },
  {
    name: "COVID-19",
    description: "A respiratory illness caused by the SARS-CoV-2 virus, leading to global pandemic.",
    prevalence: "Hundreds of millions of cases worldwide",
    link: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019",
  },
  {
    name: "Hepatitis B",
    description: "A viral infection that attacks the liver and can cause both acute and chronic disease.",
    prevalence: "254 million people globally",
    link: "https://www.who.int/news-room/fact-sheets/detail/hepatitis-b",
  },
  {
    name: "Cholera",
    description: "An acute diarrheal disease caused by ingestion of food or water contaminated with Vibrio cholerae.",
    prevalence: "Millions at risk annually",
    link: "https://www.who.int/news-room/fact-sheets/detail/cholera",
  },
];

export default function Diseases() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#2c3e50" }}>
        Most Prevalent Communicable Diseases
      </h1>
      <div className="diseases-grid">
        {diseases.map((disease) => (
          <div className="disease-card" key={disease.name}>
            <h3>{disease.name}</h3>
            <p className="description">{disease.description}</p>
            <div className="meta-data">
              <span className="prevalence">{disease.prevalence}</span>
              <a
                href={disease.link}
                target="_blank"
                rel="noopener noreferrer"
                className="details-link"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 