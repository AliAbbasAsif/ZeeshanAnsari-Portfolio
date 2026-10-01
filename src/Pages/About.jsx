import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function About() {
  const features = [
    {
      number: "01",
      title: "Concept First",
      text: "Build a strong understanding of Business concepts before moving towards examination techniques.",
    },
    {
      number: "02",
      title: "Practical Learning",
      text: "Connect classroom concepts with real-world business situations and examples.",
    },
    {
      number: "03",
      title: "Exam Focused",
      text: "Develop the analytical and evaluation skills required to approach A-Level questions confidently.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 0, md: 0 },
        px: {xs:2,md:4},
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 10 }} alignItems="center">
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 6 }}>
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
              About The Teaching Approach
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "38px", md: "54px" },
                lineHeight: 1.08,
                fontWeight: 800,
                letterSpacing: "-2px",
                color: "#132a3a",
                mb: 3,
              }}
            >
              Business education that goes beyond the textbook.
            </Typography>

            <Typography
              sx={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#61707a",
                maxWidth: "600px",
              }}
            >
              Learning Business is not simply about memorising
              definitions and models. It is about understanding how
              businesses operate, why decisions are made, and how
              ideas can be applied to real-world situations.
            </Typography>

            <Typography
              sx={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#61707a",
                maxWidth: "600px",
                mt: 2,
              }}
            >
              The focus is on developing strong conceptual
              understanding while helping students become confident,
              analytical, and independent learners.
            </Typography>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                backgroundColor: "#f2f8f5",
                borderRadius: "32px",
                p: { xs: 3, md: 5 },
              }}
            >
              {features.map((feature) => (
                <Box
                  key={feature.number}
                  sx={{
                    display: "flex",
                    gap: 3,
                    py: 3,
                    borderBottom:
                      feature.number !== "03"
                        ? "1px solid rgba(19,42,58,0.08)"
                        : "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 800,
                      color: "#4f8f78",
                      pt: 0.5,
                    }}
                  >
                    {feature.number}
                  </Typography>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "21px",
                        fontWeight: 700,
                        color: "#132a3a",
                        mb: 1,
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#69777f",
                        lineHeight: 1.7,
                      }}
                    >
                      {feature.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
