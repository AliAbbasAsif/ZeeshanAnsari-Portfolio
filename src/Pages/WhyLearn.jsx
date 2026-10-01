import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function WhyLearn() {
    const benefits = [
        {
            number: "01",
            title: "Clear Concepts",
            text: "Complex theories and ideas are broken down into simple, understandable concepts.",
        },
        {
            number: "02",
            title: "Exam Confidence",
            text: "Learn how to approach different question types, structure responses, and manage examination time.",
        },
        {
            number: "03",
            title: "Analytical Thinking",
            text: "Develop the ability to analyse information and build logical chains of reasoning.",
        },
        {
            number: "04",
            title: "Evaluation Skills",
            text: "Learn how to compare perspectives and make well-supported business judgements.",
        },
    ];

    return (
        <Box sx={{ py: { xs: 1, md: 1.5 } , }}>


            <Box
                component="section"
                sx={{
                    py: { xs: 8, md: 14 },
                    px: {xs:2,md:4},
                    backgroundColor: "#f6faf8",
                }}
            >
                <Container maxWidth="xl">
                    <Box sx={{ maxWidth: "700px", mb: 7 }}>
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
                            Why Learn With Me
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
                            More than just exam preparation.
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "17px",
                                lineHeight: 1.8,
                                color: "#69777f",
                            }}
                        >
                            Build the knowledge, skills, and confidence needed to
                            understand Business and perform effectively in examinations.
                        </Typography>
                    </Box>

                    <Grid container spacing={2}>
                        {benefits.map((benefit) => (
                            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={benefit.number}>
                                <Box
                                    sx={{
                                        height: "100%",
                                        minHeight: "260px",
                                        backgroundColor: "#ffffff",
                                        borderRadius: "26px",
                                        p: 4,
                                        border: "1px solid rgba(19,42,58,0.07)",
                                        transition: "all 0.3s ease",

                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                            boxShadow: "0 20px 50px rgba(19,42,58,0.08)",
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
                                        {benefit.number}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: "22px",
                                            fontWeight: 700,
                                            color: "#132a3a",
                                            mb: 2,
                                        }}
                                    >
                                        {benefit.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#69777f",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {benefit.text}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
