"use client";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Zoom } from "swiper/modules";
import Image from "next/image";

export default function ThumbsGallery({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="w-full space-y-2 md:max-h-[400px] grid grid-cols-1  grid-flow-row grid-rows-thumb ">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          zoom={{ maxRatio: 3, minRatio: 1 }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Zoom]}
          className="mySwiper2 "
          autoHeight={true}
        >
          {product.image.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="swiper-zoom-container cursor-zoom-in">
                <Image
                  width={500}
                  height={500}
                  alt="product image"
                  className="object-cover w-full object-center "
                  src={image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          autoHeight={true}
        >
          {product.image.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Image
                className="object-cover"
                width={100}
                height={100}
                src={image}
                alt="product image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
