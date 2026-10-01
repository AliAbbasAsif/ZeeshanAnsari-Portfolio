import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Teaching", route: "/teaching" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <Box sx={{p:0,m:0}}>

   
    <Box
      component="footer"
      sx={{
        backgroundColor: "#132a3a",
        color: "#ffffff",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 800,
                mb: 1,
              }}
            >
              Zeeshan Ansari
            </Typography>

            <Typography
              sx={{
                color: "#b7c5cd",
                mb: 3,
              }}
            >
              A-Level Business Education
            </Typography>

            <Typography
              sx={{
                color: "#8fa0a9",
                maxWidth: "450px",
                lineHeight: 1.7,
              }}
            >
              Helping students understand Business, develop
              analytical thinking, and approach their A-Level
              examinations with confidence.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Navigation
            </Typography>

            {links.map((link) => (
              <Typography
                key={link.name}
                component={Link}
                to={link.route}
                sx={{
                  display: "block",
                  color: "#b7c5cd",
                  textDecoration: "none",
                  mb: 1.5,

                  "&:hover": {
                    color: "#ffffff",
                  },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Contact
            </Typography>

            <Typography
              sx={{
                color: "#b7c5cd",
                mb: 1.5,
              }}
            >
              Email Address
            </Typography>

            <Typography
              sx={{
                color: "#b7c5cd",
              }}
            >
              Phone Number
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Typography
            sx={{
              color: "#71838d",
              fontSize: "13px",
            }}
          >
            © {new Date().getFullYear()} Zeeshan Ansari. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
    </Box>
  );
}

