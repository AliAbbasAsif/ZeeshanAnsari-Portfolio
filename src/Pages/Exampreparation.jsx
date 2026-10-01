import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function ExamPreparation() {
  const skills = [
    {
      title: "Question Analysis",
      text: "Understand exactly what an examination question is asking and identify the skills required.",
    },
    {
      title: "Answer Structure",
      text: "Learn how to structure responses logically and develop clear chains of reasoning.",
    },
    {
      title: "Case Study Application",
      text: "Use information from case studies effectively instead of relying solely on memorised theory.",
    },
    {
      title: "Analysis & Evaluation",
      text: "Develop stronger arguments and make justified, well-supported business judgements.",
    },
    {
      title: "Past Paper Practice",
      text: "Build familiarity with examination questions and improve confidence under timed conditions.",
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
            Examination Preparation
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
            Prepare with purpose.
          </Typography>

          <Typography
            sx={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#69777f",
            }}
          >
            Turn your Business knowledge into clear, structured, and
            exam-ready answers.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: index === 4 ? 12 : 4,
              }}
              key={skill.title}
            >
              <Box
                sx={{
                  p: 4,
                  height: "100%",
                  minHeight: "200px",
                  borderRadius: "26px",
                  backgroundColor:
                    index === 4 ? "#eef7f3" : "#f7f8f9",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "21px",
                    fontWeight: 700,
                    color: "#132a3a",
                    mb: 2,
                  }}
                >
                  {skill.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#69777f",
                    lineHeight: 1.7,
                  }}
                >
                  {skill.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

