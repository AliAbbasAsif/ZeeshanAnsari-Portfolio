import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const testimonials = [
  {
    quote: "Student testimonial will be added here.",
    name: "Student Name",
    detail: "A-Level Business",
  },
  {
    quote: "Student testimonial will be added here.",
    name: "Student Name",
    detail: "A-Level Business",
  },
  {
    quote: "Student testimonial will be added here.",
    name: "Student Name",
    detail: "A-Level Business",
  },
];

export default function Testimonials() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        backgroundColor: "#f6faf8",
      }}
    >
      <Container maxWidth="xl" sx={{  px: {xs:2,md:4},}}>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "700px",
            mx: "auto",
            mb: 7,
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
            Student Experiences
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "38px", md: "54px" },
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: "-2px",
              color: "#132a3a",
            }}
          >
            What students say.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Box
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "26px",
                  p: 4,
                  minHeight: "240px",
                  border: "1px solid rgba(19,42,58,0.06)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    color: "#4f8f78",
                    lineHeight: 1,
                    mb: 3,
                  }}
                >
                  "
                </Typography>

                <Typography
                  sx={{
                    color: "#46555e",
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  {testimonial.quote}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#132a3a",
                  }}
                >
                  {testimonial.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#7a858c",
                    mt: 0.5,
                  }}
                >
                  {testimonial.detail}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

