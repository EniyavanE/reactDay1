import PriceCard from "./priceCard.jsx"
import "./App.css"

function App() {
  const obj1 = [{
    id: "1",
    type: "FREE",
    cash: "$0/month",
    user: "Single User",
    storage: "50GB Storage",
    projects: "Unlimited Public Projects",
    access: "Community Access",
    privateProjects: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    domain: "Free Subdomain",
    report: "Monthly status report"
  },
  {
    id: "2",
    type: "PLUS",
    cash: "$9/month",
    user: "5 User",
    storage: "50GB Storage",
    projects: "Unlimited Public Projects",
    access: "Community Access",
    privateProjects: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    domain: "Free Subdomain",
    report: "Monthly status report"
  },
  {
    id: "3",
    type: "PRO",
    cash: "$49/month",
    user: "Unlimited User",
    storage: "50GB Storage",
    projects: "Unlimited Public Projects",
    access: "Community Access",
    privateProjects: "Unlimited Private Projects",
    support: "Dedicated Phone Support",
    domain: "Free Subdomain",
    report: "Monthly status report"
  }]

  return (
    <div>
      <h1>React Price Card Task</h1>
      <p className="description">Reproduce this user interface using a React.js application with JSX. Write the code in a dynamic manner.</p>
      <div className="priceCards">
        <div className="priceCard">
          {obj1.map((cardDetail) =>
            <PriceCard cardDetail={cardDetail} key={cardDetail.id} />)}
        </div>
      </div>
    </div>
  )
}

export default App
