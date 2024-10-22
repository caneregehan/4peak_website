import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

// Define the style for the images in the carousel
const imageStyle = {
  width: "200px",
  height: "100px",
  borderRadius: "10px",
  border: "1px solid transparent",
};

function CarouselGames() {
  return (
    <div className="relative flex h-full bg-transparent">
      <div className="container max-w-screen-xl mx-auto relative z-20 overflow-x-hidden">
        <Splide
          options={{
            type: "loop", // Loop back to the beginning when reaching the end
            autoScroll: {
              pauseOnHover: true, // Do not pause scrolling when hovering over the carousel
              pauseOnFocus: true, // Do not pause scrolling when the carousel is focused
              rewind: true, // Rewind to start when the end is reached
              speed: 1, // Scrolling speed
            },
            arrows: false, // Hide navigation arrows
            pagination: false, // Hide pagination dots
            fixedWidth: "300px", // Fixed width for each slide
            gap: "12px", // Gap between slides
          }}
          extensions={{ AutoScroll }} // Use the AutoScroll extension
        >
          <SplideSlide>
            <img
              src="./src/assets/4PEAK_SİYAH.png"
              alt="Poster Brooklyn"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="./src/assets/4PEAK_SİYAH.png"
              alt="Poster Macao"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="./src/assets/4PEAK_SİYAH.png"
              alt="Poster Navada"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="./src/assets/4PEAK_SİYAH.png"
              alt="Poster Brooklyn"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="./src/assets/4PEAK_SİYAH.png"
              alt="Poster Macao"
              style={imageStyle}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="./src/assets/4PEAK_SİYAH.png"
              alt="Poster Navada"
              style={imageStyle}
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default CarouselGames;
