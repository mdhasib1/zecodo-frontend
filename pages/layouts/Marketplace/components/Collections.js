import React from "react";
import { Col, Container, Media, Row } from "reactstrap";
const Data = [
  {
    img: '/assets/images/fashion/banner/5.jpg',
    classes: "p-right text-end",
  },
  {
    img: '/assets/images/fashion/banner/10.jpg',
    classes: "p-right text-end",
  },
  {
    img: '/assets/images/fashion/banner/8.jpg',
    classes: "p-right text-end",
  },
  {
    img: '/assets/images/fashion/banner/9.jpg',
    classes: "p-right text-end",
  },
];

const MasterCollections = ({ img, title, desc, link, classes }) => {
  return (
    <Col lg="3" md="6">
        <div className={`collection-banner ${classes}`}>
          <div className="img-part">
            <Media src={img} className="img-fluid blur-up lazyload bg-img" />
          </div>
        </div>
    </Col>
  );
};

const Collections = () => (
  <section className="banner-padding banner-furniture ratio2_1">
    <Container fluid={true}>
      <Row className="partition4">
        {Data.map((data, i) => {
          return (
            <MasterCollections
              key={i}
              img={data.img}
              classes={data.classes}
            />
          );
        })}
      </Row>
    </Container>
  </section>
);

export default Collections;
