import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function TeachingApproach() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      text: "Build a clear understanding of fundamental Business concepts.",
    },
    {
      number: "02",
      title: "Apply",
      text: "Connect theories with practical business situations and real-world examples.",
    },
    {
      number: "03",
      title: "Analyse",
      text: "Examine information, identify relationships, and develop logical chains of analysis.",
    },
    {
      number: "04",
      title: "Evaluate",
      text: "Compare perspectives, make justified decisions, and reach supported conclusions.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        backgroundColor: "#132a3a",
        color: "#ffffff",
      }}
    >
      <Container maxWidth="xl" sx={{  px: {xs:2,md:4},}}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              sx={{
                color: "#9bd1ba",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Teaching Approach
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "38px", md: "52px" },
                lineHeight: 1.08,
                fontWeight: 800,
                letterSpacing: "-2px",
                mb: 3,
              }}
            >
              From understanding to application.
            </Typography>

            <Typography
              sx={{
                color: "#b7c5cd",
                lineHeight: 1.8,
                fontSize: "17px",
              }}
            >
              A structured learning process designed to help students
              progress from understanding concepts to producing stronger
              analytical and evaluative answers.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={2}>
              {steps.map((step) => (
                <Grid
                  size={{ xs: 12, sm: 6 }}
                  key={step.number}
                >
                  <Box
                    sx={{
                      p: 4,
                      minHeight: "230px",
                      borderRadius: "26px",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#9bd1ba",
                        fontWeight: 800,
                        fontSize: "14px",
                        mb: 5,
                      }}
                    >
                      {step.number}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#b7c5cd",
                        lineHeight: 1.7,
                      }}
                    >
                      {step.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
