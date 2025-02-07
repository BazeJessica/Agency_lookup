import React from "react";
import { Link, useParams } from "react-router-dom";
import "../style/agencyDirectory.css";
import agencyData from "./agencyData";

const AgencyDirectory = () => {
  const { category } = useParams();

  const agencies = {
    Government: [
      "Public Utilities Regulatory Commission",
      "National Communications Authority",
      "National Development Planning Commission",
      "National Commission on Culture",
    ],
    marketing: ["Agency A", "Agency B", "Agency C"],
    technology: ["Tech Corp", "Innovate Ltd", "Dev Solutions"],
    design: ["Creative Minds", "Design Studio", "Artistic Co"],
    consulting: ["Consulting Experts", "Strategy Group", "Biz Advisors"],
  };

  return (
    <>
      <div className="top-nav">
        <input type="text" placeholder="Search for agencies..." />
      </div>
      <div className="directory-container">
        <div className="title-section">
          <div>
            <img src="/assets/Agency.jpg" alt="" />
          </div>
          <div className="directory-header">
            <h1>🌟 Agency Directory</h1>
            <p>
              Need Help? Find the best agencies to suit your needs—marketing,
              tech, design, and more!
            </p>
          </div>
        </div>
        <div className="category-section">
          {category ? (
            <div>
              <h2>
                {category.charAt(0).toUpperCase() + category.slice(1)} Agencies
              </h2>
              <ul>
                {agencies[category] ? (
                  agencies[category].map((agency, index) => (
                    <li key={index}>
                      <Link to={`/agency/${agency}`}>
                        {agencyData[agency]?.name || "Agency Name"}
                      </Link>
                    </li>
                  ))
                ) : (
                  <p>No agencies found.</p>
                )}
              </ul>
            </div>
          ) : (
            Object.keys(agencies).map((cat) => (
              <div key={cat}>
                <h2>{cat.charAt(0).toUpperCase() + cat.slice(1)} Agencies</h2>
                <ul>
                  {agencies[cat].map((agency, index) => (
                    <li key={index}>
                      <Link
                        to={`/agency/${agency
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {agency}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AgencyDirectory;
