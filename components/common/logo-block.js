import React from "react";
import Slider from "react-slick";
import { Col, Container, Media, Row } from "reactstrap";
import { Slider6 } from "../../services/script";

const LogoBlock = ({ designClass }) => {
  const imgData = [
    "/assets/images/logos/logo.png",
  ];
  return (
    <section className={designClass}>
      <Container>
        <Row>
          <Col md="12">
            <Slider {...Slider6} className="slide-6 no-arrow">
              {imgData.map((imgSrc, i) => {
                return (
                  <div key={i}>
                    <div className="logo-block">
                      <a href={null}>
                        <Media src={imgSrc} alt="" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LogoBlock;
