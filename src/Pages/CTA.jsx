import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

export default function CTA() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg" sx={{  px: {xs:2,md:4},}}>
        <Box
          sx={{
            backgroundColor: "#132a3a",
            borderRadius: { xs: "28px", md: "40px" },
            textAlign: "center",
            px: { xs: 3, md: 8 },
            py: { xs: 7, md: 10 },
          }}
        >
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
            Start Your Journey
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "38px", md: "56px" },
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-2px",
              maxWidth: "800px",
              mx: "auto",
              mb: 3,
            }}
          >
            Ready to master A-Level Business?
          </Typography>

          <Typography
            sx={{
              color: "#b7c5cd",
              fontSize: "17px",
              lineHeight: 1.8,
              maxWidth: "650px",
              mx: "auto",
              mb: 4,
            }}
          >
            Build a stronger understanding of Business, develop your
            analytical and evaluation skills, and approach your
            examinations with greater confidence.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffffff",
              color: "#132a3a",
              borderRadius: "999px",
              px: 4,
              py: 1.5,
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "none",

              "&:hover": {
                backgroundColor: "#eef7f3",
                boxShadow: "none",
              },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
