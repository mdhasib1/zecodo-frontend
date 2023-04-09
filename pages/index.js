import React from "react";
import Helmet from "react-helmet";
import ProductSection from "../components/common/Collections/Collection11";
import TopCollection from "../components/common/Collections/Collection3";
import ModalComponent from "../components/common/Modal";
import ServiceLayout from "../components/common/Service/service1";
import MasterFooter from "../components/footers/common/MasterFooter";
import HeaderOne from "../components/headers/Header";
import Collections from "./layouts/Marketplace/components/Collections";
import HomeSlider from "./layouts/Marketplace/components/Home-slider";

const Fashion = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"/assets/images/banner/circle_black.png"} />
      </Helmet>
      <ModalComponent />
      <HeaderOne logoName={"logo.png"} topClass="top-header" />
      <HomeSlider />
      <Collections />
      <ProductSection/>
      <TopCollection/>
      <ServiceLayout sectionClass="border-section small-section" />
      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo.png"}
      />
    </>
  );
};

export default Fashion;
