"use client";

import Card from "@/common_components/card";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

const cardHeight = 400;

const countryData = [
  {
    title: "ASIA",
    image: "/map1.png",
    countries: [
      "Afghanistan", "Israel", "Jordan", "Pakistan", "Russia", "Saudi Arabia", "Singapore", "Syria",
      "Philippines", "Turkey", "Turkmenistan", "Uzbekistan", "Yemen", "Vietnam", "Indonesia",
      "Malaysia", "Iran", "Tajikistan",
    ],
  },
  {
    title: "AFRICA",
    image: "/map2.png",
    countries: [
      "South Africa", "Uganda", "Nigeria", "Ghana", "Kenya", "Mauritius", "Botswana", "Egypt",
      "Ethiopia", "Libya", "Sudan", "Congo", "Gambia", "Ivory Coast",
    ],
  },
  {
    title: "NORTH & LATIN AMERICA",
    image: "/map3.png",
    countries: [
      "South Africa", "Uganda", "Nigeria", "Ghana", "Kenya", "Mauritius", "Botswana", "Egypt",
      "Ethiopia", "Libya", "Sudan", "Congo", "Gambia", "Ivory Coast",
    ],
  },
  {
    title: "EUROPE",
    image: "/map4.png",
    countries: [
      "Austria", "Azerbaijan", "Belarus", "Belgium", "Cyprus", "Czech Republic", "Denmark", "France",
      "Georgia", "Germany", "Hungary", "Ireland", "Iceland", "Netherlands", "Norway", "Poland",
      "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom (UK)", "Latvia",
    ],
  },
  {
    title: "OCEANIA",
    image: "/map5.png",
    countries: ["Australia", "New Zealand", "Fiji"],
  },
  {
    title: "",
    image: "/map6.png",
    countries: "",
  }
];

export default function GlobalCountry() {
  return (
    <Box sx={{ px: 3, py: 6, backgroundColor: "#f9f9f9" }}>
      <Box sx={{ width: "80%", margin: "auto" }}>
        <Typography variant="h6" sx={{ fontWeight: 700, textAlign: "start", mb: 4 }}>
          OUR BRANDED AND GENERIC MEDICINES ENJOY{" "}
          <Box component="span" sx={{ color: "teal" }}>
            STEADY DEMAND IN FOLLOWING COUNTRIES:
          </Box>
        </Typography>

        <Grid container spacing={3}>
          {countryData.map((item, index) => (
            <Grid item xs={4} sm={6} md={4} key={index}>
              {item.title ? (
                <Card
                content
                  title={item.title}
                  sx={{
                    height: `${cardHeight}px`,
                    borderRadius: "20px",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 2,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {item.countries.join(", ")}
                  </Typography>
                </Card>
              ) : (
                <Box
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    position: "relative",
                    height: `${cardHeight}px`,
                    width: "100%",
                  }}
                >
                  <Image
                    src={item.image}
                    alt="Pharmacist"
                    layout="fill"
                    objectFit="cover"
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      p: 2,
                      bgcolor: "rgba(255,255,255,0.85)",
                      width: "100%",
                    }}
                  >
                    <Typography variant="body2" fontWeight={500}>
                      Our mantra has always been global. Only the best quality,
                      capability, infrastructure and pricing can survive in this market.
                    </Typography>
                  </Box>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
