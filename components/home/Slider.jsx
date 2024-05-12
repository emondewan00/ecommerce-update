"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import LinkButton from "../shared/LinkButton";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoHeight={true}
        autoplay={{
          delay: 3000,
          waitForTransition: true,
        }}
        speed={2000}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image
            src={"/images/slide-1.jpg"}
            className="rounded relative hidden md:block"
            width={1000}
            height={700}
            alt=""
          />
          <Image
            src={"/images/slide-1.jpg"}
            className="rounded relative block slide-image md:hidden"
            width={300}
            height={500}
            alt=""
          />
          <div className="absolute top-0 flex flex-col justify-center h-full ml-4 md:ml-14 text-gray-900">
            <p className="text-[12px] text-white uppercase">
              Find the boundaries .Push through
            </p>
            <h1 className="text-2xl md:text-5xl font-bold uppercase">
              Great Deals
            </h1>
            <div className="flex gap-x-4 mt-2">
              <h5 className="uppercase text-lg mt-2">
                <sup>starting at $</sup>
                <em className="text-2xl">299</em>
                <sup>99</sup>
              </h5>
              <LinkButton url={"/"} text={"GET YOURS!"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide-1.jpg"}
            className="rounded relative hidden md:block"
            width={1000}
            height={700}
            alt=""
          />
          <Image
            src={"/images/slide-1.jpg"}
            className="rounded relative block slide-image md:hidden"
            width={300}
            height={500}
            alt=""
          />
          <div className="absolute top-0 flex flex-col justify-center h-full ml-4 md:ml-14 text-gray-900">
            <p className="text-[12px] text-white uppercase">
              Find the boundaries .Push through
            </p>
            <h1 className="text-2xl md:text-5xl font-bold uppercase">
              Great Deals
            </h1>
            <div className="flex gap-x-4 mt-2">
              <h5 className="uppercase text-lg mt-2">
                <sup>starting at $</sup>
                <em className="text-2xl">299</em>
                <sup>99</sup>
              </h5>
              <LinkButton url={"/"} text={"GET YOURS!"} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/images/slide-1.jpg"}
            className="rounded relative hidden md:block"
            width={1000}
            height={700}
            alt=""
          />
          <Image
            src={"/images/slide-1.jpg"}
            className="rounded relative block slide-image md:hidden"
            width={300}
            height={500}
            alt=""
          />
          <div className="absolute top-0 flex flex-col justify-center h-full ml-4 md:ml-14 text-gray-900">
            <p className="text-[12px] text-white uppercase">
              Find the boundaries .Push through
            </p>
            <h1 className="text-2xl md:text-5xl font-bold uppercase">
              Great Deals
            </h1>
            <div className="flex gap-x-4 mt-2">
              <h5 className="uppercase text-lg mt-2">
                <sup>starting at $</sup>
                <em className="text-2xl">299</em>
                <sup>99</sup>
              </h5>
              <LinkButton url={"/"} text={"GET YOURS!"} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
