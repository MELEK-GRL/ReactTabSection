import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


import data from "../data/cartData";
import Tab from "../components/Tab";
import Cart from "./Cart";

import { useState, useEffect } from "react";
import Section from "./Section";

export default function Sliders() {
  const [dataSkirt, setDataSkirt] = useState([]);
  const [dataSweet, setDataSweet] = useState([]);
  const [dataCap, setDataCap] = useState([]);
  const [dataSilk, setDataSilk] = useState([]);

  useEffect(() => {
    const filterDataSkirt = data.filter((item) => item.categories === "skirt");
    const filterDataSweet = data.filter((item) => item.categories === "sweet");
    const filterCap = data.filter((item) => item.categories === "cap");
    const filterSilk = data.filter((item) => item.categories === "silk");

    setDataSkirt(filterDataSkirt);
    setDataSweet(filterDataSweet);
    setDataCap(filterCap);
    setDataSilk(filterSilk);
  }, []);



  function NextBtn(props) {
    const {  style, onClick } = props;
    return (
      <button
        className="border-gray-600 border left-[-4px]  w-[24px] h-[24px] bottom-[12em] absolute rounded-sm"
        style={style}
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowLeft className=" w-[13px] h-[13px] top-[1px] right-[-3px] relative" />
      </button>
    );
  }
  
  function PrevtBtn(props) {
    const {  style, onClick } = props;
    return (
      <button
        className="border-gray-600 border w-[24px] h-[24px] absolute z-10 top-[9.8em] right-[16.5px]  rounded-sm"
        style={style}
        onClick={onClick}
      >
        <MdOutlineKeyboardArrowRight className=" w-[13px] h-[13px] top-[1px] right-[-3px] relative" />
      </button>
    );
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows:true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevtBtn />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          arrows:false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2.5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          
        },
      },
    ],
  };

  const [tabs, setTabs] = useState(0);
  return (
    <div className="boxCenter flex-col md:flex-row w-full gap-6">
      <div className="flex md:w-[50%] w-full">
        <div
          className={`flex w-full  ${tabs === 0 ? "tabs" : "tabsNone"}`}
          hidden={tabs !== 0}
        >
          <Cart data={dataSkirt} />
        </div>
        <div
          className={`flex w-full  ${tabs === 1 ? "tabs" : "tabsNone"}`}
          hidden={tabs !== 1}
        >
          <Cart data={dataSweet} />
        </div>
        <div
          className={`flex w-full  ${tabs === 2 ? "tabs" : "tabsNone"}`}
          hidden={tabs !== 2}
        >
          <Cart data={dataCap} />
        </div>
        <div
          className={`flex w-full  ${tabs === 3 ? "tabs" : "tabsNone"}`}
          hidden={tabs !== 3}
        >
          <Cart data={dataSilk} />
        </div>
      </div>
     <div className=" md:w-[50%] flex flex-col p-[0px] md:p-[50px] md:gap-16 gap-4 w-full ">
      <Section/>
     <div className="w-[95%] ">
        <Slider {...settings} >
          <div className="w-full   flex  flex-col">
            <div
              onClick={() => setTabs(0)}
              className={`w-[90%] flex cursor-pointer ${
                tabs === 0 ? "activeTabs" : null
              }`}
            >
              <Tab data={dataSkirt} />
            </div>
          </div>
          <div className="w-full   flex  flex-col">
            <div
              onClick={() => setTabs(1)}
              className={`w-[90%] flex cursor-pointer ${
                tabs === 1 ? "activeTabs" : null
              }`}
            >
              <Tab data={dataSweet} />
            </div>
          </div>
          <div className="w-full     flex  flex-col">
            <div
              onClick={() => setTabs(2)}
              className={`w-[90%] flex cursor-pointer ${
                tabs === 2 ? "activeTabs" : null
              }`}
            >
              <Tab data={dataCap} />
            </div>
          </div>
          <div className="w-full     flex  flex-col">
            <div
              onClick={() => setTabs(3)}
              className={`w-[90%] flex cursor-pointer ${
                tabs === 3 ? "activeTabs" : null
              }`}
            >
              <Tab data={dataSilk} />
            </div>
          </div>
        </Slider>
      </div>
     </div>
    </div>
  );
}