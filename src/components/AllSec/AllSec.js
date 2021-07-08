import React from "react";
import { dummyData } from "../dummyData";
import PromoSection from "./Sections/PreSec/PromoSection";
import ScrollSection from "./Sections/ScrollSec/ScrollSection";
import AllRestSection from "./Sections/AllRestNearYou/AllRestSection";

const AllRestSec = () => {
  return (
    <>
      <ScrollSection
        data={dummyData} // restaurant what to display in this section
        heading="Top Restaurants"
      />
      <PromoSection promo={dummyData} heading="Offers" />
      <AllRestSection data={dummyData} heading="All Restaurants Near You" />
    </>
  );
};

export default AllRestSec;
