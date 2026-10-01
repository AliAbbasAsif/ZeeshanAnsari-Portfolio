import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

const pages = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

export default function Navbar() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const navigate = useNavigate();

  const openMobileMenu = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  const handleNavigation = (route) => {
    closeMobileMenu();
    navigate(route);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,

        // Space around the navbar
        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },

        pt: {
          xs: 2,
          sm: 2.5,
          md: 3,
        },

      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",

          // Pill shape
          borderRadius: "999px",

          // Navbar background
          backgroundColor: "rgba(255, 255, 255, 0.92)",

          // Glass effect
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",

          // Border
          border: "1px solid rgba(0, 0, 0, 0.08)",

          // Floating shadow
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",

          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        <Box
          sx={{
            minHeight: {
              xs: "60px",
              md: "70px",
            },

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}
          <Box
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "#111111",

              display: "flex",
              alignItems: "center",

              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  md: "21px",
                },

                fontWeight: 700,

                letterSpacing: "-0.5px",
              }}
            >
              Zeeshan Ansari
            </Typography>
          </Box>

          {/* DESKTOP NAVIGATION */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },

              alignItems: "center",

              gap: 0.5,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.route}
                sx={{
                  color: "#111111",

                  textTransform: "none",

                  fontSize: "15px",

                  fontWeight: 500,

                  borderRadius: "999px",

                  px: 2,

                  py: 1,

                  transition: "all 0.2s ease",

                  "&:hover": {
                    backgroundColor: "#111111",
                    color: "#ffffff",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* MOBILE MENU */}
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <IconButton
              onClick={openMobileMenu}
              sx={{
                color: "#111111",

                width: 42,
                height: 42,
              }}
              aria-label="open navigation menu"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={closeMobileMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1.5,

                    borderRadius: "18px",

                    minWidth: "180px",

                    boxShadow:
                      "0 10px 40px rgba(0, 0, 0, 0.12)",

                    border:
                      "1px solid rgba(0, 0, 0, 0.08)",
                  },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() =>
                    handleNavigation(page.route)
                  }
                  sx={{
                    borderRadius: "10px",
                    mx: 0.5,
                    my: 0.2,
                  }}
                >
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

