import React, { Fragment } from "react";
import Slider from "react-slick";
import MasterBanner from "../../Fashion/Components/MasterBanner";


const Data = [
  {
    img: '/assets/images/banner/banner1.png',
    classes: "p-center text-center",
  },
  {
    img: "/assets/images/banner/banner2.png",
    classes: "p-left text-center",
  },
  {
    img: "/assets/images/banner/banner3.png",
    classes: "p-left text-center",
  },
];

const HomeSlider = () => {
  return (
    <Fragment>
      <section className="p-0 layout-7 " style={{ height:'70vh' }}>
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                classes={data.classes}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default HomeSlider;
