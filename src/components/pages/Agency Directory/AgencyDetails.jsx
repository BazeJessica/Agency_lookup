import React from "react";
import { useParams, Link } from "react-router-dom";
import agencyData from "./agencyData";

const AgencyDetails = () => {
  const { agencyName } = useParams(); 

  
  if (!agencyName || !agencyData[agencyName]) {
    return <h2>Agency not found.</h2>;
  }


  const agency = agencyData[agencyName];

  return (
    <div>
      <h1>{agency.name}</h1>
      <p>{agency.description}</p>
      <p>Contact: {agency.contact}</p>
      <Link to="/agency-directory">Back to Directory</Link>
    </div>
  );
};

export default AgencyDetails;
