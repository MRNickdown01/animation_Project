import React from "react";
import "./index.css";
import { Box } from "@mui/material";
const Award = () => {
  return (
    <section className="bg-award-section">
      <Box sx={{ textAlign: "center" }}>
        <span
          style={{ color: "#6d6875", fontSize: "1rem" }}
          className="Manrope-Bold"
        >
          Award & Appreciation
        </span>
        <h1
          style={{ color: "#fff", fontSize: "3rem", margin: "2px 0px 0px 0px" }}
          className="Manrope-Bold"
        >
          Our Recent
        </h1>
        <h1
          style={{ color: "#6d6875", fontSize: "3rem", margin: "0" }}
          className="Manrope-Bold"
        >
          Award
        </h1>
      </Box>
      <div className="frame">
        <div>
          <div className="circle-big">
            <div className="text">
              100+<div className="small">Project</div>
            </div>
            <svg>
              <circle className="bg" cx={57} cy={57} r={52} />
              <circle className="progress" cx={57} cy={57} r={52} />
            </svg>
          </div>
          <div className="circles-small">
            <div className="circle-small">
              <div className="text">
                8563
                <br />
                <span className="small">steps</span>
              </div>
              <svg>
                <circle className="bg" cx={40} cy={40} r={37} />
                <circle className="progress one" cx={40} cy={40} r={37} />
              </svg>
            </div>
            <div className="circle-small">
              <div className="text">
                6,2
                <br />
                <span className="small">km</span>
              </div>
              <svg>
                <circle className="bg" cx={40} cy={40} r={37} />
                <circle className="progress two" cx={40} cy={40} r={37} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
