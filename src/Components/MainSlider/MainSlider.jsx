import React from "react";
import Slider from "react-slick";

import img1 from '../../Assets/images/slider-image-1.jpeg'
import img2 from '../../Assets/images/slider-image-2.jpeg'
import img3 from '../../Assets/images/slider-image-3.jpeg'

import img4 from '../../Assets/images/blog-img-1.jpeg'
import img5 from '../../Assets/images/blog-img-2.jpeg'



export default function MainSlider() {

    let sliders = [img1, img2, img3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container py-4">
        <div className="row gx-0">
          <div className="col-md-10">
            <Slider {...settings}>
                {sliders.map((img)=> <img key={img}  height={400} src={img} alt=""></img>)}
            </Slider>
          </div>
          <div className="col-md-2">
            <img src={img4} height={200} className="w-100" alt="" />
            <img src={img5} height={200} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
