import book from "./assets/img/9781635570304.jpg";
import book1 from "./assets/img/9781635575422.jpg";
import book2 from "./assets/img/9781608196265.jpg";
import book3 from "./assets/img/9781639734672.jpg";
import book4 from "./assets/img/9781635578591.jpg";
import book5 from "./assets/img/9781547606658.jpg";
import Bookcard from "./bookcard";
import "./swiper.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

function Book() {
  const books = [
    {
      title: "The Priory of the Orange Tree",
      author: "Samantha Shannon",
      first: "$18.00",
      second: "RRP $20.00",
      type: "Paperback",
      formats: "+2 other formats",
      image: book,
      bookdetail: "/Bookdetail/1",
    },
    {
      title: "Outlawed",
      author: "Anna North",
      first: "$23.40",
      second: "RRP $26.00",
      type: "Hardback",
      formats: "+2 other formats",
      image: book1,
      bookdetail: "/bookoutlawed/1",
    },
    {
      title: "Salvage the Bones",
      author: "Jesmyn Ward",
      first: "$23.40",
      second: "RRP $26.00",
      type: "Paperback",
      formats: "+1 other formats",
      image: book2,
      bookdetail: "/bookdetail/2",
    },
    {
      title: "The House of Doors",
      author: "Tan Twan Eng",
      first: "$23.40",
      second: "RRP $26.00",
      type: "Paperback",
      formats: "+2 other formats",
      image: book3,
      bookdetail: "/bookdetail/3",
    },
    {
      title: "The Island of Missing Trees",
      author: "Elif Shafak",
      first: "$23.40",
      second: "RRP $26.00",
      type: "Hardback",
      formats: "+2 other formats",
      image: book4,
      bookdetail: "/bookdetail/4",
    },
    {
      title: "The Island of Missing Trees",
      author: "Elif Shafak",
      first: "$23.40",
      second: "RRP $26.00",
      type: "Hardback",
      formats: "+2 other formats",
      image: book5,
      bookdetail: "/bookdetail/5",
    },
    {
      title: "The House of Doors",
      author: "Tan Twan Eng",
      first: "$23.40",
      second: "RRP $26.00",
      type: "Paperback",
      formats: "+2 other formats",
      image: book3,
      bookdetail: "/bookdetail/3",
    },
    {
      title: "The Island of Missing Trees",
      author: "Elif Shafak",
      first: "$23.40",
      second: "RRP $26.00",
      type: "Hardback",
      formats: "+2 other formats",
      image: book4,
      bookdetail: "/bookdetail/4",
    },
    {
      title: "The Island of Missing Trees",
      author: "Elif Shafak",
      first: "$23.40",
      second: "RRP $26.00",
      type: "Hardback",
      formats: "+2 other formats",
      image: book5,
      bookdetail: "/bookdetail/5",
    },
  ];

  return (
    <div className="mt-3 container">
      <h2 className="head-2">Binge-worthy fantasy</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        navigation
        modules={[Navigation]}
             breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          // >= 1280px
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {books.map((b, index) => (
          <SwiperSlide key={index}>
            <Bookcard {...b} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Book;
