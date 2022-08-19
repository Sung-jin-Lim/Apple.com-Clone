import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: false,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    // variableWidth: true,
    centerPadding: "20%",

    adaptiveHeight: true,
  };
  return (
    <Slider {...settings}>
      {/* <div className="bg-[url('https://www.apple.com/v/home/aq/images/tv-plus-gallery/fnb__brvfy48gzsz6_large.jpg') w-[1500px] "></div> */}
      <div>
        <img
          className="w-[1250px] "
          src="https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/689x387.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/689x387.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="https://is1-ssl.mzstatic.com/image/thumb/IyvoDdhWEjtSADaSryepIw/689x387.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/689x387.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/689x387.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/689x387.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="
      https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/689x387.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="
      https://is5-ssl.mzstatic.com/image/thumb/ewq0-5ZSairVdRtcg43s0w/689x387.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="
        https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/689x387.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="https://is5-ssl.mzstatic.com/image/thumb/P-1f-E_Qew_9syoQd34Wlw/689x387.jpg"
          alt=""
        />
      </div>
      {/* <button onClick={slickPause}></button> */}
    </Slider>
  );
}