import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./index.css";
import $ from "jquery";

const ContactUs = () => {
  return (
    <div className="contact_us_bg">
      <Container maxWidth="lg">
        <div className="text_center_div">
          <h6>
            You have complete creative freedom to design any website style the
            only limit is your imagination.
          </h6>
          <h1>
            Get started today with <br />
            Dozai template
          </h1>
          <h2>Let's chat now! </h2>
          <button className="contact_us">Contact Us</button>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
