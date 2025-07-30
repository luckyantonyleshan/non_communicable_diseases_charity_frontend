import React from "react";
import MapComponent from "../components/MapComponent";

const affectedAreas = [
  {
    name: "Sub-Saharan Africa",
    description:
      "High prevalence of HIV/AIDS and malaria due to socioeconomic and environmental factors.",
    coordinates: [0.0236, 37.9062],
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6067790/",
  },
  {
    name: "South Asia",
    description:
      "Tuberculosis and hepatitis B remain major public health challenges here.",
    coordinates: [20.5937, 78.9629],
    link: "https://www.who.int/southeastasia/health-topics/hepatitis/hepatitis-searo-39-million-south-east-asia-region-of-who-has-an-estimated-39-million-people-with-chronic-hepatitis-b",
  },
  {
    name: "Southeast Asia",
    description:
      "High malaria risk and periodic cholera outbreaks in rural areas.",
    coordinates: [13.7367, 100.5232],
    link: "https://www.cdc.gov/cholera/about/global-epidemiology-of-cholera.html",
  },
  {
    name: "Global (COVID-19)",
    description:
      "COVID-19 has affected all countries worldwide with varying intensity.",
    coordinates: [20, 0],
    link: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019",
  },
];

export default function Areas() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#2c3e50" }}>
        Areas Most Affected by Communicable Diseases
      </h1>

      <div className="areas-grid">
        {affectedAreas.map((area) => (
          <div className="area-card" key={area.name}>
            <h3>{area.name}</h3>
            <p className="description">{area.description}</p>
            <div className="meta-data">
              <a
                href={area.link}
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

      <MapComponent locations={affectedAreas} center={[10, 20]} zoom={2} />
    </div>
  );
}
