import { Box, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from './Hero'
import About from './About'
import WhyLearn from './WhyLearn'
import Footer from './Footer'
import Subjects from './Subjects'
import TeachingApproach from './TeachingApproach'
import CambridgeReviewer from './CambridgeReviewer'
import ExamPreparation from './Exampreparation'
import Testimonials from './Testimonials'
import CTA from './CTA'


export default function Home() {
  return (
    <>
      <Box sx={{ p: 0, m: 0 }}>

        <Navbar />
        <Hero />
        <About />
        <WhyLearn />
        <Subjects />
        <TeachingApproach/>
        <CambridgeReviewer/>
        <ExamPreparation/>
        <Testimonials/>
        <CTA />


        <Footer />
      </Box>
    </>

  )
}
