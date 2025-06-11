import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

// const sectionData = [
//   {
//     title: "Our Partnering Policy",
//     content:
//       "We believe in working together towards success, with mutual trust, understanding our partner's requirements and above all satisfying them.",
//     image: "/grid1.png",
//     imageFirst: false,
//   },
//   {
//     title: "Partnerships",
//     content:
//       "Our products are available to local pharmaceutical distributors in most countries. We support our partners with manufacture and supply of pharmaceutical products according to their requirements and specifications. We provide the marketing support to our partners. Our business development team and Regulatory team are always at our customer's service.",
//     image: "/grid2.png",
//     imageFirst: true,
//   },
//   {
//     title: "Customer Specific Manufacture And Supply",
//     content:
//       "Our products are available under private label to our distributors and partners in most countries. In order to satisfy the diverse needs of our various customers located in different parts of the world we believe in developing products specific to the requirements of our customers.",
//     image: "/grid3.png",
//     imageFirst: false,
//   },
//   {
//     title: "Co-marketing",
//     content:
//       "At Wellona Pharma, we help build 'molecules into brands.' We work with our Customers, strategically and programmatically, to accelerate, expand and extend the product life cycles of ethical drugs. We have developed considerable brand marketing experience in the emerging markets through our portfolio of branded generics. We focus on new generations of drugs thereby ascending the value chain in the marketing and ultimately increase revenues from the sales of our products.",
//     image: "/grid4.png",
//     imageFirst: true,
//   },
//   {
//     title: "Regulatory Support/ Services",
//     content:
//       "Our Regulatory team consists of elite, highly qualified personnel engaged in providing data required to assure the high Quality, efficacy and safety of our Products. We can provide, clinical Trials, FDA Certificates and BE Studies for registration of our products as per guidelines of most health authorities in most countries.",
//     image: "/grid5.png",
//     imageFirst: false,
//   },
//   {
//     title: "Logistics",
//     content:
//       "We understand that distribution of pharmaceutical products must be undertaken with a great deal of care and attention. Raw materials awaiting processing and finished products awaiting dispatch are stored in modern, fully climate-controlled high-bay storage areas. We are able to meet the delivery needs of its customers thanks to its modern data and order processing systems, its inspections of all goods entering and leaving the factory, and the latest transport logistics (road, sea or air). No matter what route product takes, or how long it takes to get there, its journey is carefully monitored until it reaches its destination.",
//     image: "/grid6.png",
//     imageFirst: true,
//   },
// ];

const successFactors = [
  [
    "High quality products.",
    "Flexible responsive service.",
    '"Just In time" delivery approach.',
    "Competitive pricing",
    "Excellent compliance record.",
  ],
  [
    "Efficient technical transfers.",
    "Modern GMP Certified facilities.",
    "FDA approved site.",
    "Strong Regulatory support.",
    "Efficient inventory coverage.",
  ],
];

export default function GridImageSection() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(max-width:1024px)");

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        {/* 1st Section */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 8 }}
        >
          <Grid size={{ xs : 12, md : 6 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "#023350", mb: 2 }}
            >
              Our Partnering <span style={{ color: "#03A297" }}>Policy</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              We believe in working together towards success, with mutual trust,
              <br />
              understanding our partner&lsquo;s requirements and above all satisfying
              them.
            </Typography>
          </Grid>
          <Grid size={{ xs : 12, md : 6 }} sx={{ textAlign: "center" }}>
            <Image src="/grid1.png" alt="Grid 1" width={680} height={200} />
          </Grid>
        </Grid>

        {/* 2nd Section */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 8 }}
        >
          <Grid size={{ xs : 12, md : 6 }} sx={{ textAlign: "center" }}>
            <Image src="/grid2.png" alt="Grid 2" width={600} height={100} />
          </Grid>
          <Grid size={{ xs : 12, md : 6 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "#023350", mb: 2 }}
            >
              Partnerships
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Our products are available to local pharmaceutical distributors in
              most <br />
              countries. We support our partners with manufacture and supply of{" "}
              <br />
              pharmaceutical products according to their requirements and
              specifications. <br />
              We provide the marketing support to our partners. Our business
              development team <br />
              and Regulatory team are always at our customer&lsquo;s service.
            </Typography>
          </Grid>
        </Grid>

        {/* 3rd Section */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 8 }}
        >
          <Grid size={{ xs : 12, md : 6 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "#023350", mb: 2 }}
            >
              Customer Specific{" "}
              <span style={{ color: "#03A297" }}>
                Manufacture And <br />
                Supply
              </span>
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Our products are available under private label to our distributors
              and partners in <br />
              most countries. In order to satisfy the diverse needs of our
              various customers <br />
              located in different parts of the world we believe in developing
              products <br />
              specific to the requirements of our customers.
            </Typography>
          </Grid>
          <Grid size={{ xs : 12, md : 6 }} sx={{ textAlign: "center" }}>
            <Image src="/grid3.png" alt="Grid 3" width={620} height={100} />
          </Grid>
        </Grid>

        {/* 4th Section */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 8 }}
        >
          <Grid size={{ xs : 12, md : 6 }} sx={{ textAlign: "center" }}>
            <Image src="/grid4.png" alt="Grid 4" width={600} height={100} />
          </Grid>
          <Grid size={{ xs : 12, md : 6 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "#023350", mb: 2 }}
            >
              Co-<span style={{ color: "#03A297" }}>Marketing</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                width: { xs: "330px", md: "635px" },
              }}
            >
              At Wellona Pharma, we help build &#34;molecules into brands.&#34; We work
              with our Customers, strategically and programmatically, to
              accelerate, expand and extend the product life cycles of ethical
              drugs. We have developed considerable brand marketing experience
              in the emerging markets through our portfolio of branded generics.
              We focus on new generations of drugs thereby ascending the value
              chain in the marketing and ultimately increase revenues from the
              sales of our products.
            </Typography>
          </Grid>
        </Grid>

        {/* 5th gris image */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 8 }}
        >
          <Grid size={{ xs : 12, md : 6 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "#023350", mb: 2 }}
            >
              Regulatory{" "}
              <span style={{ color: "#03A297", fontWeight: "700" }}>
                Support/ Services
              </span>
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Our products are available under private label to our distributors
              and partners in <br />
              most countries. In order to satisfy the diverse needs of our
              various customers <br />
              located in different parts of the world we believe in developing
              products <br />
              specific to the requirements of our customers.
            </Typography>
          </Grid>
          <Grid size={{ xs : 12, md : 6 }} sx={{ textAlign: "center" }}>
            <Image src="/grid5.png" alt="Grid 3" width={620} height={100} />
          </Grid>
        </Grid>

        {/* 6th Grid Image */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 8 }}
        >
          <Grid size={{ xs : 12, md : 6 }} sx={{ textAlign: "center" }}>
            <Image src="/grid6.png" alt="Grid 4" width={600} height={100} />
          </Grid>
          <Grid size={{ xs : 12, md : 6 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "#023350", mb: 2 }}
            >
              Logistics
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                width: { xs: "330px", md: "635px" }, }} >
              We understand that distribution of pharmaceutical products must be
              undertaken with a great deal of care and attention. Raw materials
              awaiting processing and finished products awaiting dispatch are
              stored in modern, fully climate-controlled high-bay storage areas.
              We are able to meet the delivery needs of its customers thanks to
              its modern data and order processing systems, its inspections of
              all goods entering and leaving the factory, and the latest
              transport logistics (road, sea or air). No matter what route
              product takes, or how long it takes to get there, its journey is
              carefully monitored until it reaches its destination.
            </Typography>
          </Grid>
        </Grid>
            
      </Box>      
            <Box sx={{
                width: isMobile ? "95%" : isTablet ? "90%" : "80%",
                margin: "auto",
                marginTop: isMobile ? "10%" : "5%",
                marginBottom: isMobile ? "15%" : "12%"}}>
                <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    sx={{ 
                        fontWeight: 700, 
                        color: "#023350",
                        fontSize: isMobile ? "1.1rem" : "1.25rem"
                    }}
                >
                    In A Nutshell, The Factors That Have Made Us Successful In Drug Manufacturing For Overseas Markets Are:
                </Typography>
                <Box sx={{ 
                    display: "flex", 
                    flexDirection: isMobile ? "column" : "row",
                    flexWrap: "wrap", 
                    justifyContent: "space-between", 
                    maxWidth: "900px", 
                    mt: 2,
                    gap: isMobile ? 2 : 0
                }}>
                    {successFactors.map((list, index) => (
                        <Box 
                            key={index} 
                            component="ul" 
                            sx={{ 
                                width: isMobile ? "100%" : "45%", 
                                pl: 2, 
                                color: "#6c7586", 
                                fontSize: isMobile ? "14px" : "16px", 
                                m: 0 
                            }}
                        >
                            {list.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>
    </Container>
  );
}
