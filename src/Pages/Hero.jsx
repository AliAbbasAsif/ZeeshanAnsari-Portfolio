import React from 'react'
import bg from '../Images/Z.png'
import { Box, Grid, Typography, Button } from '@mui/material'

export default function Hero() {
    return (
        <>
            <Box>

                <Box
                    sx={{
                        position: "relative",
                        minHeight: {
                            xs: "auto",
                            md: "650px",
                        },
                        display: "flex",
                        alignItems: "center",
                        overflow: "hidden",
                        py: {
                            xs: 0,
                            md: 0,
                        },
                        // background:
                        //   "linear-gradient(135deg, #f8f9fb 0%, #ffffff 55%, #eef2f7 100%)",
                    }}
                >
                    {/* Decorative background element */}
                    <Box
                        sx={{
                            position: "absolute",
                            width: 450,
                            height: 450,
                            // borderRadius: "50%",
                            // background:
                            //   "radial-gradient(circle, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 70%)",
                            right: "-120px",
                            top: "-100px",
                            pointerEvents: "none",
                        }}
                    />

                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "1400px",
                            mx: "auto",
                            px: {
                                xs: 3,
                                md: 6,
                                lg: 8,
                            },
                        }}
                    >
                        <Grid
                            container
                            spacing={0}
                            alignItems="center"
                            sx={{
                                position: "relative",
                            }}
                        >
                            {/* TEXT */}
                            <Grid
                                size={{
                                    xs: 12,
                                    md: 7,
                                }}
                                sx={{
                                    position: "relative",
                                    zIndex: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        maxWidth: "720px",

                                        /* Creates the overlap */
                                        mr: {
                                            md: "-100px",
                                        },

                                        // backgroundColor: "rgba(255,255,255,0.94)",
                                        // backdropFilter: "blur(10px)",
                                        // WebkitBackdropFilter: "blur(10px)",

                                        // borderRadius: {
                                        //   xs: "24px",
                                        //   md: "32px",
                                        // },

                                        p: {
                                            xs: 4,
                                            sm: 5,
                                            md: 6,
                                        },

                                        // boxShadow:
                                        //   "0 25px 70px rgba(0,0,0,0.10)",

                                        // border:
                                        //   "1px solid rgba(0,0,0,0.06)",
                                    }}
                                >
                                    {/* Small label */}
                                    <Typography
                                        sx={{
                                            display: "inline-flex",
                                            alignItems: "center",

                                            px: 2,
                                            py: 0.8,

                                            mb: 2,

                                            borderRadius: "999px",

                                            backgroundColor: "#111111",
                                            color: "#ffffff",

                                            fontSize: "13px",
                                            fontWeight: 600,

                                            letterSpacing: "0.8px",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        A-Level Business
                                    </Typography>

                                    {/* Main heading */}
                                    <Typography
                                        component="h1"
                                        sx={{
                                            fontSize: {
                                                xs: "42px",
                                                sm: "52px",
                                                md: "64px",
                                            },

                                            lineHeight: {
                                                xs: 1.05,
                                                md: 1,
                                            },

                                            fontWeight: 800,

                                            letterSpacing: "-2.5px",

                                            color: "#111111",

                                            mb: 2,
                                        }}
                                    >
                                        Understand Business.
                                        <br />

                                        <Box
                                            component="span"
                                            sx={{
                                                color: "#777777",
                                            }}
                                        >
                                            Master the Concepts.
                                        </Box>
                                    </Typography>

                                    {/* Subheading */}
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: "18px",
                                                md: "21px",
                                            },

                                            lineHeight: 1.5,

                                            fontWeight: 500,

                                            color: "#333333",

                                            mb: 1,

                                            maxWidth: "620px",
                                        }}
                                    >
                                        Excel in A-Levels.
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: "15px",
                                                md: "17px",
                                            },

                                            lineHeight: 1.8,

                                            color: "#666666",

                                            maxWidth: "620px",

                                            mb: 2,
                                        }}
                                    >
                                        Expert A-Level Business teaching focused on building
                                        strong conceptual understanding, developing exam
                                        confidence, and turning complex business ideas into
                                        clear, practical knowledge.
                                    </Typography>

                                    {/* Buttons */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 2,
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "#111111",
                                                color: "#ffffff",

                                                borderRadius: "999px",

                                                px: 3.5,
                                                py: 1.5,

                                                fontSize: "15px",
                                                fontWeight: 600,

                                                textTransform: "none",

                                                boxShadow: "none",

                                                "&:hover": {
                                                    backgroundColor: "#333333",
                                                    boxShadow: "none",
                                                },
                                            }}
                                        >
                                            Start Learning
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            sx={{
                                                color: "#111111",

                                                borderColor: "#cccccc",

                                                borderRadius: "999px",

                                                px: 3.5,
                                                py: 1.5,

                                                fontSize: "15px",
                                                fontWeight: 600,

                                                textTransform: "none",

                                                "&:hover": {
                                                    borderColor: "#111111",
                                                    backgroundColor: "#f5f5f5",
                                                },
                                            }}
                                        >
                                            Explore Course
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* IMAGE */}
                            <Grid
                                size={{
                                    xs: 12,
                                    md: 5,
                                }}
                                sx={{
                                    position: "relative",
                                    zIndex: 1,
                                    mt: {
                                        xs: 4,
                                        md: 0,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",

                                        height: {
                                            xs: "350px",
                                            sm: "450px",
                                            md: "560px",
                                        },

                                        width: "100%",

                                        // borderRadius: {
                                        //   xs: "28px",
                                        //   md: "40px",
                                        // },

                                        overflow: "hidden",

                                        // backgroundColor: "#e9edf2",

                                        transform: {
                                            md: "translateX(20px)",
                                        },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={bg}
                                        alt="A-Level Business Education"
                                        sx={{
                                            width: "100%",
                                            height: "100%",

                                            // objectFit: "cover",

                                            display: "block",
                                        }}
                                    />

                                    {/* Image overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            inset: 0,

                                            // background:
                                            //   "linear-gradient(135deg, rgba(0,0,0,0.05), rgba(0,0,0,0.25))",
                                        }}
                                    />
                                </Box>

                                {/* Floating card */}
                                <Box
                                    sx={{
                                        position: "absolute",

                                        bottom: {
                                            xs: -20,
                                            md: 40,
                                        },

                                        right: {
                                            xs: 20,
                                            md: -30,
                                        },

                                        zIndex: 4,

                                        backgroundColor: "#111111",
                                        color: "#ffffff",

                                        borderRadius: "20px",

                                        px: 3,
                                        py: 2.5,

                                        boxShadow:
                                            "0 20px 50px rgba(0,0,0,0.20)",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            color: "#aaaaaa",
                                            mb: 0.5,
                                        }}
                                    >
                                        Your A-Level Journey
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 700,
                                        }}
                                    >
                                        Learn. Apply. Excel.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>


            </Box>
        </>
    )
}
