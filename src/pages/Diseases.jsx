import DiseaseCard from "../components/DiseaseCard"

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
]

export default function Diseases() {
  return (
    <div className="diseases-page">
      <div className="container">
        <div className="page-header">
          <h1>Most Prevalent Communicable Diseases</h1>
          <p className="page-description">
            Understanding these diseases is the first step toward prevention and treatment. Learn about the most common
            communicable diseases affecting communities worldwide.
          </p>
        </div>

        <div className="diseases-grid">
          {diseases.map((disease) => (
            <DiseaseCard key={disease.name} disease={disease} />
          ))}
        </div>
      </div>
    </div>
  )
}
