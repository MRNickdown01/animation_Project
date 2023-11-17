import { Container, Grid, Button, Chip } from "@mui/material";
import React from "react";
import "./index.css";
import styles from "../../ModulesCss/mystyle.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
const RecentPost = () => {
  const post = [
    {
      image: require("../../assets/Images/post_1.jpeg"),
      heading: "10 Web Design Blogs You Can't Miss",
      detail:
        "Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Nam pretium turpis et arcu.",
      date: "Monday, October 3, 2022",
      btn: "Marketing",
    },
    {
      image: require("../../assets/Images/post_2.jpg"),
      heading: "How to improve Web Design Process",
      detail:
        "Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Nam pretium turpis et arcu.",
      date: "Monday, October 3, 2022",
      btn: "Marketing",
    },
    {
      image: require("../../assets/Images/post_3.jpg"),
      heading: "20 Myths About Web Design",
      detail:
        "Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Nam pretium turpis et arcu.",
      date: "Monday, October 3, 2022",
      btn: "Web Design",
    },
  ];

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f77f00",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

  return (
    <section className="recent_post_section">
      <Container maxWidth="lg">
        {post?.map((i, index) => (
          <div className="post_card_detail">
            <Grid container spacing={2} key={index}>
              <Grid item lg={6}>
                <div>
                  <img className="post_image" src={i?.image} />
                </div>
              </Grid>
              <Grid item lg={6}>
                <div className="post_detail_content">
                  <h2 className="post_heading">{i?.heading}</h2>
                  <p className={styles?.p_details}>{i?.detail}</p>
                  <div className="recent_post_date">
                    <h3>{i?.date}</h3>
                    {/* <button className="check_btn">{i?.btn}</button> */}
                    <ThemeProvider theme={theme}>
                      <Chip
                        label={i?.btn}
                        color="primary"
                        sx={{ color: "#fff", fontSize: "16px" }}
                      />
                    </ThemeProvider>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default RecentPost;
