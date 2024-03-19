import React from "react";

import HeroSlider from "../components/Home/HeroSlider";
import QuotesSlider from "../components/Home/QuotesSlider";
import StoryBooks from "../components/Home/books/StoryBooks";

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSlider />
      <QuotesSlider />
      <StoryBooks />
    </div>
  );
};

export default HomePage;
