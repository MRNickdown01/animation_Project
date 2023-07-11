import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import "./index.css";
import $ from "jquery";

const AmazingProduct = () => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = () => {
    setIsActive(!isActive);
  };
  console.log(isActive);
  return (
    <section className="product_bg_section">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <div className="Product_demo_girl"></div>
          </Grid>
          <Grid item xs={6}>
            <div className="container">
              <ul className="acc">
                <li>
                  <button className="acc_ctrl" onClick={handleChange}>
                    <h2>Holden</h2>
                  </button>
                  {isActive ? (
                    <div className="acc_panel">
                      <p>
                        GM Holden Ltd, commonly known as Holden, is an
                        Australian automaker that operates in Australasia and is
                        headquartered in Port Melbourne, Victoria. The company
                        was founded in 1856 as a saddlery manufacturer in South
                        Australia.
                      </p>
                    </div>
                  ) : null}
                </li>
                <li>
                  <button className="acc_ctrl">
                    <h2>Ford</h2>
                  </button>
                  <div className="acc_panel">
                    <p>
                      The Ford Motor Company (commonly referred to as simply
                      Ford) is an American multinational automaker headquartered
                      in Dearborn, Michigan, a suburb of Detroit. It was founded
                      by Henry Ford and incorporated on June 16, 1903.
                    </p>
                  </div>
                </li>
                <li>
                  <button className="acc_ctrl">
                    <h2>Toyota</h2>
                  </button>
                  <div className="acc_panel">
                    <p>
                      Toyota Motor Corporation is a Japanese automotive
                      manufacturer which was founded by Kiichiro Toyoda in 1937
                      as a spinoff from his father's company Toyota Industries,
                      which is currently headquartered in Toyota, Aichi
                      Prefecture, Japan.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AmazingProduct;
