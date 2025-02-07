import React from "react";
import { useParams, Link } from "react-router-dom";
import agencyData from "./agencyData";
import '../style/agentDetails.css'


const AgencyDetails = () => {
  const { agencyName } = useParams(); 

  
  if (!agencyName || !agencyData[agencyName]) {
    return <h2>Agency not found.</h2>;
  }


  const agency = agencyData[agencyName];

  return (
    <div className="details-content">
      <h1 className="agency-name">{agency.name}</h1>
      <div className="agency-image-container">
        <img src={agency.image} alt="AgencyImage" className="agency-image" />
      </div>
      
      <p className="agency-description">{agency.description}</p>
      <p className="agency-contact">Contact: {agency.contact}</p>
      <Link to="/agency-directory" className="back-link">Back to Directory </Link>
    </div>
  );
};

export default AgencyDetails;
