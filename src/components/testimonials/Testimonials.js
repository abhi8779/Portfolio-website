import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const datas = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Bhupesh Dhapola",
    review:
      "is The my name is abhi is the thn jok jknjk mksm jksjkl is is Thmy  is abhi is the thn jok jknjk mksm jksjkl is one of The myname is abhi is the thn jok jknjk mksm jksjkl is The my name isabhi is the thn jok jknjk mksm jksjkl is one of The my name isabhi is the thn jok jknjk mksm jksjkl",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Bhupesh Dhapola",
    review:
      "is The my name is abhi is the thn jok jknjk mksm jksjkl is is Thmy  is abhi is the thn jok jknjk mksm jksjkl is one of The myname is abhi is the thn jok jknjk mksm jksjkl is The my name isabhi is the thn jok jknjk mksm jksjkl is one of The my name isabhi is the thn jok jknjk mksm jksjkl",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Bhupesh Dhapola",
    review:
      "is The my name is abhi is the thn jok jknjk mksm jksjkl is is Thmy  is abhi is the thn jok jknjk mksm jksjkl is one of The myname is abhi is the thn jok jknjk mksm jksjkl is The my name isabhi is the thn jok jknjk mksm jksjkl is one of The my name isabhi is the thn jok jknjk mksm jksjkl",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Bhupesh Dhapola",
    review:
      "is The my name is abhi is the thn jok jknjk mksm jksjkl is is Thmy  is abhi is the thn jok jknjk mksm jksjkl is one of The myname is abhi is the thn jok jknjk mksm jksjkl is The my name isabhi is the thn jok jknjk mksm jksjkl is one of The my name isabhi is the thn jok jknjk mksm jksjkl",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules modules=
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {datas.map((data) => {
          return (
            <SwiperSlide key={data.id} className="testimonial">
              <div className="client__avatar">
                <img src={data.avatar} alt={"avtr1"}></img>
              </div>
              <h5 className="client__name">{data.name}</h5>
              <small className="client__review">{data.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
