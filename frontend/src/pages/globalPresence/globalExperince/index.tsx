import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const StyledImage = styled(Image)({
  objectFit: "contain",
});

export default function GlobalExperince() {
  return (
    <Box sx={{ width: "100%", bgcolor: "white" }}>
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", lg: "row" },
          gap: 4,
          alignItems: "center"
        }}>
          {/* Image Section */}
          <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
            <Box sx={{ position: "relative", height: { xs: 300, md: 400, lg: 600 } }}>
              <StyledImage
                src="/leftbaner.png"
                alt="banner"
                fill
                priority
              />
            </Box>
          </Box>

          {/* Content Section */}
          <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#03A297",
                mt: { xs: 2, md: 0 }
              }}
            >
              Global{" "}
              <Typography
                component="span"
                sx={{
                  color: "#023350",
                  fontWeight: "bold",
                  fontSize: { xs: "1.875rem", md: "2.25rem" }
                }}
              >
                Presence
              </Typography>
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ mt: 4, color: "text.secondary", lineHeight: 1.7 }}
            >
              Curigen Pharma currently exports to over 86 countries and 5
              continents globally which include North America, CIS, Latin
              America, Africa and South-East Asia. With over 380 International
              Product Registrations (still expanding), we are emerging as a
              major potential Indian Pharmaceuticals manufacturer.
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ mt: 4, color: "text.secondary", lineHeight: 1.7 }}
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
              sx={{ mt: 4, color: "text.secondary", lineHeight: 1.7 }}
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
