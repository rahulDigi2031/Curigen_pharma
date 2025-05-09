import Header from "@/Components/header";
import { Box , Typography } from "@mui/material";
import Image from "next/image";
import ServiceComaponent from "@/Components/ServiceComponent";
import Card from "@/common_components/card";
import ExperinceSection from "./experinceSection";
import ItemCategoryDisplay from "./itemCategory";

export default function Homepage() {

  return (
    <Box>
      <Header />
      {/* Items Categories below side */}
      <ItemCategoryDisplay/>

      {/* experince section below side */}
      <ExperinceSection/>

      {/*Services component below side"*/}
      <ServiceComaponent />
      
    </Box>
  );
}
