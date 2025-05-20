import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

export default function GlobalExperince() {
  return (
    <Box className="w-full bg-white">
      <Container maxWidth="xl" className="py-8 md:py-12">
        <Box className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4">
          {/* Image Section */}
          <Box className="w-full lg:w-1/2">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px]">
              <Image
                src="/leftbaner.png"
                alt="banner"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Box>

          {/* Content Section */}
          <Box className="w-full lg:w-1/2">
            <Typography
              variant="h4"
              className="font-bold text-[#03A297] mt-4 md:mt-0"
            >
              Global{" "}
              <span className="text-[#023350] font-bold text-3xl md:text-4xl">
                Presence
              </span>
            </Typography>

            <Typography 
              variant="body1" 
              className="mt-8 text-gray-700 leading-relaxed"
            >
              Curigen Pharma currently exports to over 86 countries and 5
              continents globally which include North America, CIS, Latin
              America, Africa and South-East Asia. With over 380 International
              Product Registrations (still expanding), we are emerging as a
              major potential Indian Pharmaceuticals manufacturer.
            </Typography>

            <Typography 
              variant="body1" 
              className="mt-8 text-gray-700 leading-relaxed"
            >
              Streamlining the export vision at Wellona Pharma, a dedicated
              Export regulatory department team has been set up for complying
              with international audits and providing complete export
              documentation including COPP and dossier preparations as per CTD
              format. Operating in total compliance with c-GMP norms, Wellona
              pharma's manufacturing unit has been granted certifications by
              many regulatory Agencies.
            </Typography>

            <Typography 
              variant="body1" 
              className="mt-8 text-gray-700 leading-relaxed"
            >
              We endeavor to become the world class pharmaceutical manufacturer
              for India & neighboring countries and to assist in the development
              of quality products by providing superior performance with high
              Quality products in right budget. Our formulation development team
              and regulatory department are focused on bringing latest generics
              to our markets thereby guaranteeing a constant flow of the latest
              products to our customers.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
