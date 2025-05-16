import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function GlobalExperince() {
  return (
    <Box>
      <Box sx={{ backgroundColor: "white", width: "100%", height: "800px" }}>
        <Box
          sx={{
            width: "80%",
            margin: "4% auto",
            padding: "10px",
            display: "flex",
            alignContent: "center",
            gap: "50px",
          }}
        >
          <Box sx={{ width: "40%", }}>
            <Image
              src="/leftbaner.png"
              alt="banner"
              width={640}
              height={600}
            ></Image>
          </Box>
          <Box
            sx={{
              width: "50%",
            }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "700", color: "#03A297" , marginTop:"15px"}}>
              Global{" "}
              <span
                style={{
                  color: "#023350",
                  fontWeight: "700",
                  fontSize: "36px",
                }}
              >
                Presence
              </span>
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "35px" }}>
              Curigen Pharma currently exports to over 86 countries and 5
              continents globally which include North America, CIS, Latin
              America, Africa and South-East Asia. With over 380 International
              Product Registrations (still expanding), we are emerging as a
              major potential Indian Pharmaceuticals manufacturer.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "35px" }}>
              Streamlining the export vision at Wellona Pharma, a dedicated
              Export regulatory department team has been set up for complying
              with international audits and providing complete export
              documentation including COPP and dossier preparations as per CTD
              format. Operating in total compliance with c-GMP norms, Wellona
              pharma’s manufacturing unit has been granted certifications by
              many regulatory Agencies.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "35px" }}>
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
      </Box>
    </Box>
  );
}
