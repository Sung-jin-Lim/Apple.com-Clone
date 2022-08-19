import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import SimpleSlider from "./SimpleSlider";

// slider

function Body() {
  return (
    <div className="Body">
      <div className="Body-container1 grid grid-rows-3 gap-3 tracking-tighter">
        <div className="mac flex flex-col	gap-3 justify-center py-10 items-center bg-[#F5F5F7] ">
          <i className="text-6xl font-semibold z-2 ">
            Get <span className="text-pink-600">supercharged</span> for college
          </i>
          <h3 className="text-3xl z-2"> Save on Mac or iPad. Plus get a gift card up to $150.</h3>
          <a href="" className="text-[#06c] text-xl z-2">
            Shop Now &#62;
          </a>
          <img
            className="macsuper"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/bts-header-giftcard-202206?wid=1120&hei=1074&fmt=jpeg&qlt=90&.v=1655326451200"
            alt=""
          />
        </div>
        <div className="mac-air bg-center bg-top-2 flex flex-col justify-center py-10 items-center">
          <div className="relative right-60 flex flex-col	gap-4 justify-center items-center">
            <h1 className="text-6xl font-semibold z-2 ">MacBook Air</h1>
            <h3 className="text-3xl z-2 flex flex-row gap-2 justify-center items-center">
              Supercharged by <img src="/m2.jpg" alt="m2" className="h-8 relative top-1" />
            </h3>
            <span className="gap-6 flex">
              <a href="" className="text-[#06c] text-2xl z-2">
                Learn more &#62;
              </a>

              <a href="" className="text-[#06c] text-2xl z-2">
                Buy &#62;
              </a>
            </span>
          </div>
        </div>
        <div className="iphone-13 bg-center flex flex-col justify-top py-10">
          <div className="relative  flex flex-col	gap-2 justify-center items-center">
            <h1 className="text-6xl font-semibold z-2 ">iPhone 13</h1>
            <h3 className="text-3xl z-2 flex flex-row gap-2 justify-center items-center">
              Your new superpower
            </h3>
            <span className="gap-6 flex">
              <a href="" className="text-[#06c] text-2xl z-2">
                Learn more &#62;
              </a>

              <a href="" className="text-[#06c] text-2xl z-2">
                Buy &#62;
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="Body-container2 grid grid-rows-3 grid-cols-2 gap-3 mt-4 ">
        <div className="iphone-13-2 flex flex-col bg-bottom bg-[#FBFBFD] bg-no-repeat items-center gap-2 py-10 h-[36rem] transition ease-out-in duration-1000	hover:-translate-y-5 hover:scale-90 ">
          <h1 className="text-4xl font-semibold">iPhone 13 Pro</h1>
          <p className="text-xl ">Oh. So. Pro.</p>
          <span className="flex gap-6 text-lg">
            <a href="" className="text-[#06c]">
              Learn more &#62;
            </a>
            <a href="" className="text-[#06c]">
              Buy &#62;
            </a>
          </span>
        </div>
        <div className="macbook-pro-13 flex flex-col  bg-no-repeat items-center gap-2 py-10 h-[36rem] text-white transition ease-out-in duration-1000	hover:-translate-y-5 hover:scale-90 ">
          <h1 className="text-4xl font-semibold">MacBook Pro 13"</h1>
          <p className="text-xl flex flex-row items-center gap-1">
            Supercharged by <img src="/m1-2.png" alt="m2" className="h-8 relative top-1" />
          </p>
          <span className="flex gap-6 text-lg">
            <a href="" className="text-[#2997ff]">
              Learn more &#62;
            </a>
            <a href="" className="text-[#2997ff]">
              Buy &#62;
            </a>
          </span>
        </div>
        <div className="apple-watch flex flex-col bg-repeat bg-bottom bg-[#FBFBFD] bg-no-repeat items-center gap-2 py-10 h-[36rem] transition ease-out-in duration-1000	hover:-translate-y-5 hover:scale-90 ">
          <h1 className="text-4xl font-semibold">
            <img
              src="https://www.apple.com/v/home/aq/images/logos/watch-series-7/promo_logo_watch_lte__emrof7zzkriq_large.png"
              alt=""
            />
          </h1>
          <p className="text-xl ">It’s our largest display yet.</p>
          <span className="flex gap-6 text-lg">
            <a href="" className="text-[#06c]">
              Learn more &#62;
            </a>
            <a href="" className="text-[#06c]">
              Buy &#62;
            </a>
          </span>
        </div>
        <div className="ipad-air-2 flex flex-col bg-repeat bg-bottom bg-[#FBFBFD] bg-no-repeat items-center gap-2 py-10 h-[36rem] text-white transition ease-out-in duration-1000	hover:-translate-y-5 hover:scale-90 ">
          <h1 className="text-4xl font-semibold">
            <img
              src="https://www.apple.com/v/home/aq/images/logos/ipad-air/promo_logo_ipadair__frwnnsqveeye_large.png"
              alt="ipad-air"
            />
          </h1>
          <p className="text-xl ">Light. Bright. Full of might.</p>
          <span className="flex gap-6 text-lg">
            <a href="" className="text-[#2997ff]">
              Learn more &#62;
            </a>
            <a href="" className="text-[#2997ff]">
              Buy &#62;
            </a>
          </span>
        </div>
        <div className="apple-card flex flex-col bg-repeat bg-bottom bg-[#FBFBFD] bg-no-repeat items-center gap-2 py-10 h-[36rem] transition ease-out-in duration-1000	hover:-translate-y-5 hover:scale-90 ">
          <h1 className="text-4xl font-semibold">
            <img
              src="https://www.apple.com/v/home/aq/images/logos/apple-card/logo__dcojfwkzna2q_large.png"
              alt="card"
            />
          </h1>
          <p className="text-xl text-center">
            Get up to 3% Daily Cash back <br /> with every purchase.
          </p>
          <span className="flex gap-6 text-lg">
            <a href="" className="text-[#06c]">
              Learn more &#62;
            </a>
            <a href="" className="text-[#06c]">
              Apply Now &#62;
            </a>
          </span>
        </div>
        <div className="airpods flex flex-col bg-repeat bg-bottom bg-[#FBFBFD] bg-no-repeat justify-end items-center gap-2 py-10 h-[36rem] text-white transition ease-out-in duration-1000	hover:-translate-y-5 hover:scale-90 ">
          <h1 className="text-4xl font-semibold">AirPods</h1>
          <p className="text-xl ">with Spatial Audio</p>
          <span className="flex gap-6 text-lg">
            <a href="">Learn more &#62;</a>
            <a href="">Buy &#62;</a>
          </span>
        </div>
      </div>
      <div>
        <SimpleSlider />
        <button
          // onClick={slickPause}
          className="absolute right-2"
        >
          <img src="play.jpg" alt="" className="w-7 relative top-0.5 right-3" />
        </button>
      </div>
    </div>
  );
}

export default Body;
