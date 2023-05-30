import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";


const Trending = () => {
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">
          Trending
        </span>
      </ContentWrapper>
    </div>
  )
}

export default Trending
