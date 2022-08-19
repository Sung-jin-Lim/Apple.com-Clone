import React from "react";
import Slider from "react-slick";
// import state
import { useState } from "react";

// state that checks pause of the slider
// const [pause, setPause] = useState(false);



export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    // autoplay: { pause },
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    // variableWidth: true,
    centerPadding: "10%",

    adaptiveHeight: true,
  };
  return (
    <Slider {...settings} autoplay='false'>
      {/* <div className="bg-[url('https://www.apple.com/v/home/aq/images/tv-plus-gallery/fnb__brvfy48gzsz6_large.jpg') w-[1500px] "></div> */}
      <div >
        <img
          className="w-[1250px] "
          src="https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/1250x703.jpg"
          alt=""
        />
      </div >
      <div>
        <img
          className="w-[1250px]"
          src="https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/1250x703.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="https://is1-ssl.mzstatic.com/image/thumb/IyvoDdhWEjtSADaSryepIw/1250x703.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/1250x703.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/1250x703.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/1250x703.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="
      https://is2-ssl.mzstatic.com/image/thumb/_dJgnWG8W30_qMRZYCEx-Q/1250x703.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="
      https://is5-ssl.mzstatic.com/image/thumb/ewq0-5ZSairVdRtcg43s0w/1250x703.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="
        https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1250x703.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="w-[1250px]"
          src="https://is5-ssl.mzstatic.com/image/thumb/P-1f-E_Qew_9syoQd34Wlw/1250x703.jpg"
          alt=""
        />
      </div>

    </Slider >


  );
}
