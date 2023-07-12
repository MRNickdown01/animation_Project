import React from "react";
import HeaderSection from "../HeaderSection";
import AboutSection from "../AboutSection";
import AmazingProduct from "../AmazingProduct";
import ReviewSection from "../ReviewSection";
import $ from "jquery";
import { useEffect } from "react";

const MainRoutePage = () => {
  // useEffect(() => {
  //   $(function () {
  //     $(".acc_ctrl").on("click", function (e) {
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
  return (
    <section className="maine_route_page">
      <div className="header_route">
        <HeaderSection />
      </div>
      <div className="about_route">
        <AboutSection />
      </div>
      <div className="product_route">
        <AmazingProduct />
      </div>
      <div className="review_route">
        <ReviewSection />
      </div>
    </section>
  );
};
export default MainRoutePage;
