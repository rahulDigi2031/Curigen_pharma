import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";



export default function GlobalExperince() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ py: { xs: 6, md: 10 }, position: "relative", zIndex: 1 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 4, md:0 },
            alignItems: "center",
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              width: { xs: "100%", lg: "50%" },
              position: "relative",
            }}
          >
            <Image src="/leftbaner.png" alt="" width={600} height={200}></Image>
          </Box>

          {/* Content Section */}
          <Box
            sx={{
              width: { xs: "100%", lg: "50%" },
              px: { xs: 2, md: 4 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: "#002B5B",
                mb: 3,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                lineHeight: 1.2,
              }}
            >
              Global Experience
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Curigen Pharma currently exports to over 86 countries and 5
              continents globally which include North America, CIS, Latin
              America, Africa and South-East Asia. With over 380 International
              Product Registrations (still expanding), we are emerging as a
              major potential Indian Pharmaceuticals manufacturer. <br />
              Streamlining the export vision at Wellona Pharma, a dedicated
              Export regulatory department team has been set up for complying
              with international audits and providing complete export
              documentation including COPP and dossier preparations as per CTD
              format. Operating in total compliance with c-GMP norms, Wellona
              pharma’s manufacturing unit has been granted certifications by
              many regulatory Agencies. <br />
              <br />
              We endeavor to become the world class pharmaceutical manufacturer
              for India & neighboring countries and to assist in the development
              of quality products by providing superior performance with high
              Quality products in right budget. Our formulation development team
              and regulatory department are focused on bringing latest generics
              to our markets thereby guaranteeing a constant flow of the latest
              products to our customers.
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                gap: 3,
              }}
            >
              {/* Add your experience cards or content here */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
