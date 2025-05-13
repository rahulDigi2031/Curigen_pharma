import Header from "@/Components/header";
import { Box } from "@mui/material";
import ServiceComaponent from "@/Components/ServiceComponent";
import ExperinceSection from "./experinceSection";
import ItemCategoryDisplay from "./itemCategory";
import PublishContent from "./publish";
import PromiseSection from "./QualitySection";
import HomeGallerySection from "./galleryHome";

export default function Homepage() {
  return (
    <Box>
      <Header />
      {/* Items Categories below side */}
      <ItemCategoryDisplay />


      {/* experince section below side */}
      <ExperinceSection />


      {/*Services component below side"*/}
      <ServiceComaponent />

      {/* Publish component below side */}
      <PublishContent />

      {/* Quality PromiseSection */}
      <PromiseSection/>

      {/* Gallery Section */}
      <HomeGallerySection/>
      
    </Box>
  );
}
