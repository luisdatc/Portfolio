import React from "react";

const PaginationButton = () => {
  return (
    <div className="slider-controler mt-2">
      <div className="swiper-button-prev slider-arrow">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <div className="swiper-button-next slider-arrow">
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default PaginationButton;
