import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Subjects() {
  const subjects = [
    {
      number: "01",
      title: "Business & Its Environment",
      text: "Understand how businesses operate and how external factors influence business decisions.",
    },
    {
      number: "02",
      title: "People in Business",
      text: "Explore leadership, motivation, organisational structures, and human resource management.",
    },
    {
      number: "03",
      title: "Marketing",
      text: "Learn about market research, segmentation, customer behaviour, and the marketing mix.",
    },
    {
      number: "04",
      title: "Operations Management",
      text: "Understand production, quality, capacity, efficiency, and resource management.",
    },
    {
      number: "05",
      title: "Business Finance",
      text: "Build confidence with financial concepts, calculations, interpretation, and decision-making.",
    },
    {
      number: "06",
      title: "Business Strategy",
      text: "Understand strategic decisions, competitive positioning, change, and long-term growth.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="xl" sx={{  px: {xs:2,md:4},}}>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "750px",
            mx: "auto",
            mb: 8,
          }}
        >
          <Typography
            sx={{
              color: "#4f8f78",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            What I Teach
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "38px", md: "54px" },
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: "-2px",
              color: "#132a3a",
              mb: 2,
            }}
          >
            A-Level Business
          </Typography>

          <Typography
            sx={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#69777f",
            }}
          >
            A structured approach to understanding the key areas of
            A-Level Business and applying them with confidence.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {subjects.map((subject) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={subject.number}>
              <Box
                sx={{
                  minHeight: "250px",
                  p: 4,
                  borderRadius: "26px",
                  backgroundColor: "#eef7f3",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    backgroundColor: "#e2f1eb",
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#4f8f78",
                    fontWeight: 800,
                    fontSize: "14px",
                    mb: 5,
                  }}
                >
                  {subject.number}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "21px",
                    fontWeight: 700,
                    color: "#132a3a",
                    mb: 2,
                  }}
                >
                  {subject.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#69777f",
                    lineHeight: 1.7,
                  }}
                >
                  {subject.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

