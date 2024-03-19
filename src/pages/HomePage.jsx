import React from "react";

import HeroSlider from "../components/Home/HeroSlider";
import QuotesSlider from "../components/Home/QuotesSlider";
import StoryBooks from "../components/Home/books/StoryBooks";
import AcademicBooks from "../components/Home/books/AcademicBooks";
import GeneralKnowledgeBooks from "../components/Home/books/GeneralKnowledgeBooks";
import AllBooks from "../components/Home/books/AllBooks";

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSlider />
      <QuotesSlider />
      <StoryBooks />
      <AcademicBooks/>
      <GeneralKnowledgeBooks/>
      <AllBooks/>
    </div>
  );
};

export default HomePage;
