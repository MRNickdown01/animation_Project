import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./index.css";
import $ from "jquery";

const AmazingProduct = () => {
  // var $ = require( "jquery" );
  const [isShow, setIsShow] = useState(false);
  const [indexData, setIndexData] = useState(10);
  const [diffData, setDiffData] = useState([
    { label: "Holden", isShow: false },
    { label: "ford", isShow: false },
    { label: "Toyata", isShow: false },
  ]);
  // useEffect(() => {
  //   $(function () {
  //     $(isShow).on("click", function (e) {
  //       e.preventDefault();
  //       if ($(this).hasClass("active")) {
  //         $(this).removeClass("active");
  //         $(this).next().stop().slideUp(300);
  //       } else {
  //         $(this).addClass("active");
  //         $(this).next().stop().slideDown(300);
  //       }
  //     });
  //   });
  // }, []);

  const handleChange = (index) => {
    setIsShow(!isShow);
    setIndexData(index);
  };

  return (
    <section className="product_bg_section">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item lg={5} md={12}>
            <div className="Product_demo_girl"></div>
          </Grid>
          <Grid item lg={6} md={12} sx={{ padding: "0px" }}>
            <div className="product_detail_div">
              <div className="heading_title">
                <h1 className="Manrope-ExBold">
                  We Create
                  <strong style={{ color: "#6d6875" }}>
                    {" "}
                    Amazing Digital{" "}
                  </strong>
                  Products
                </h1>
                <p className="Manrope-Regular">
                  With the greatest performance improvement and massive new
                  features, the Salerio template pushes the limits of what is
                  possible with a Webflow platform.
                </p>
              </div>
              <div className="container">
                <ul className="acc">
                  {diffData?.map((i, index) => (
                    <li key={index}>
                      <button
                        className="acc_ctrl"
                        id={i?.label}
                        onClick={() => {
                          handleChange(index);
                        }}
                      >
                        <h2 className="Manrope-ExBold">{i?.label}</h2>
                      </button>
                      {isShow && indexData === index && (
                        <div className="acc_panel">
                          <p>
                            GM Holden Ltd, commonly known as Holden, is an
                            Australian automaker that operates in Australasia
                            and is headquartered in Port Melbourne, Victoria.
                            The company was founded in 1856 as a saddlery
                            manufacturer in South Australia.
                          </p>
                        </div>
                      )}
                    </li>
                  ))}
                  {/* <li>
                      <button
                        className="acc_ctrl"
                        onClick={() => handleChange(index)}
                      >
                        <h2 className="Manrope-ExBold">{i?.label}</h2>
                      </button>
                      {isShow && (
                        <div className="acc_panel">
                          <p>
                            The Ford Motor Company (commonly referred to as
                            simply Ford) is an American multinational automaker
                            headquartered in Dearborn, Michigan, a suburb of
                            Detroit. It was founded by Henry Ford and
                            incorporated on June 16, 1903.
                          </p>
                        </div>
                      )}
                    </li>
                    <li>
                      <button
                        className="acc_ctrl"
                        onClick={() => handleChange(index)}
                      >
                        <h2 className="Manrope-ExBold">{i?.label}</h2>
                      </button>
                      {isShow && (
                        <div className="acc_panel">
                          <p>
                            Toyota Motor Corporation is a Japanese automotive
                            manufacturer which was founded by Kiichiro Toyoda in
                            1937 as a spinoff from his father's company Toyota
                            Industries, which is currently headquartered in
                            Toyota, Aichi Prefecture, Japan.
                          </p>
                        </div>
                      )}
                    </li> */}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AmazingProduct;
