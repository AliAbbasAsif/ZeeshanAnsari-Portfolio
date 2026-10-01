import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function CambridgeReviewer() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        backgroundColor: "#f6faf8",
      }}
    >
      <Container maxWidth="xl" sx={{  px: {xs:2,md:4},}}>
        <Grid container spacing={6} alignItems="center">
          {/* LEFT */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                minHeight: { xs: "300px", md: "450px" },
                borderRadius: "35px",
                backgroundColor: "#dfeee8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 5,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "320px",
                  aspectRatio: "0.75",
                  backgroundColor: "#ffffff",
                  borderRadius: "18px",
                  boxShadow: "0 25px 60px rgba(19,42,58,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#4f8f78",
                    letterSpacing: "1px",
                  }}
                >
                  CAMBRIDGE
                </Typography>

                <Typography
                  sx={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#132a3a",
                    lineHeight: 1.1,
                  }}
                >
                  Business
                  <br />
                  Education
                </Typography>

                <Typography
                  sx={{
                    color: "#69777f",
                    fontSize: "13px",
                  }}
                >
                  Book Reviewer
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT */}
          <Grid size={{ xs: 12, md: 7 }}>
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
              Cambridge Book Reviewer
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
              Contributing to quality Business education.
            </Typography>

            <Typography
              sx={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#69777f",
                maxWidth: "650px",
              }}
            >
              As a Cambridge University book reviewer, I engage with
              educational material designed for Business learners and
              provide professional feedback on its clarity, relevance,
              accuracy, and educational value.
            </Typography>

            <Box
              sx={{
                mt: 4,
                p: 3,
                borderRadius: "20px",
                backgroundColor: "#ffffff",
                border: "1px solid rgba(19,42,58,0.07)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#132a3a",
                  mb: 1,
                }}
              >
                Education • Clarity • Quality
              </Typography>

              <Typography
                sx={{
                  color: "#69777f",
                  lineHeight: 1.7,
                }}
              >
                Bringing an additional perspective to how Business
                concepts can be communicated effectively to students.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

