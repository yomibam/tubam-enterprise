import React from "react";
import reviewsData from "../data/ReviewsData";

export default function Reviews() {
  const DisplayReviews = () => {
    return reviewsData.map((review) => (
      <div
        key={review.id}
        className="p-[30px] bg-white shrink-0 w-full lap:shrink"
      >
        <p className="text-sm font-normal lap:text-xl">{review.message}</p>
        <span className="text-sm font-bold lap:text-xl">-{review.author}</span>
      </div>
    ));
  };
  return (
    <div className="flex flex-col items-center pt-[20px] pb-[70px] px-[10px] bg-tertiary mt-[70px]">
      <h2 className="text-base font-bold lap:text-xxl">Reviews</h2>
      <div className="flex overflow-x-auto gap-[30px] px-[10px] w-full flex-nowrap items-center justify-start pt-[20px] lap:overflow-x-hidden lap:justify-center">
        {DisplayReviews()}
      </div>
    </div>
  );
}
