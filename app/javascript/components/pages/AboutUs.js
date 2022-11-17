import React from "react";
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container, CardActions, CardMedia, Grid, Card, CardContent, Link } from '@mui/material'
import { NavLink } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebAssetIcon from '@mui/icons-material/WebAsset';

const AboutUs = () => {


  return (
    <Container
      sx={{
        mt: 10,
      }}>
      <Typography variant="h3" textAlign="center"
        sx={{
          mt: 10,
          mb: 10,
        }}>
        About Us
      </Typography>
      <Box>
        <Grid container columnSpacing={1} sx={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          {/* Nate's card */}
          <Card sx={{ m: 5, minWidth: 350, maxWidth: 350, alignItems: 'center' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://avatars.githubusercontent.com/u/111712171?v=4"
              alt="Photo of Nate"
            />
            <CardContent>
              <Typography align="center" variant="h4" component="div">
                Nate Ross
              </Typography>
              <Typography align="center" component="div" variant="h6">
                Design Lead
              </Typography >
              <Typography align="center" variant="p"
                component="div">
                <br/>
                Here's a sentence about me. Here's something I like. Here's something I wanna do.
                <br/>
              </Typography>
              <br/>
              <GitHubIcon><Link to="https://github.com/nathaniel-ross">Github</Link></GitHubIcon>
                <LinkedInIcon><Link to=" https://nathaniel-ross.github.io/">Portfolio</Link></LinkedInIcon>
                <WebAssetIcon><Link to=" https://www.linkedin.com/in/nathaniel-rossloyo/">LinkedIn</Link></WebAssetIcon>
              </CardContent>
          </Card>
          {/* Christian's card */}
          <Card sx={{ m: 5, minWidth: 350, maxWidth: 350, alignItems: 'center' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://avatars.githubusercontent.com/u/109927283?s=400&u=0a36efd5f927b79d3add60e7ee71997a6f62fb8b&v=4"
              alt="Photo of Christian"
            />
            <CardContent>
            <Typography align="center" component="div" variant="h4">
                Christian Macias
              </Typography>
              <Typography align="center" component="div" variant="h6">
                Product Manager
              </Typography>
              
              <Typography align="center" variant="p"
                component="div">
                <br/>
                Here's a sentence about me. Here's something I like. Here's something I wanna do.
                <br/>
              </Typography>
              <br/>
              <GitHubIcon><Link to="https://github.com/nathaniel-ross">Github</Link></GitHubIcon>
                <LinkedInIcon><Link to=" https://nathaniel-ross.github.io/">Portfolio</Link></LinkedInIcon>
                <WebAssetIcon><Link to=" https://www.linkedin.com/in/nathaniel-rossloyo/">LinkedIn</Link></WebAssetIcon>
              </CardContent>
          </Card>
          {/* Heath's card */}
          <Card sx={{ m: 5, minWidth: 350, maxWidth: 350, alignItems: 'center' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://avatars.githubusercontent.com/u/95312091?v=4"
              alt="Photo of Heath and puppers"
            />
            <CardContent>
            <Typography align="center" component="div" variant="h4">
                Heath Haupt
              </Typography>
              <Typography align="center" component="div" variant="h6">
                Tech Lead
              </Typography>
              <Typography align="center" variant="p"
                component="div">
                <br/>
                Here's a sentence about me. Here's something I like. Here's something I wanna do.
                <br/>
              </Typography>
              <br/>
              <GitHubIcon><Link to="https://github.com/nathaniel-ross">Github</Link></GitHubIcon>
                <LinkedInIcon><Link to=" https://nathaniel-ross.github.io/">Portfolio</Link></LinkedInIcon>
                <WebAssetIcon><Link to=" https://www.linkedin.com/in/nathaniel-rossloyo/">LinkedIn</Link></WebAssetIcon>
              </CardContent>
          </Card>
          {/* Lyssa's card */}
          <Card sx={{ m: 5, minWidth: 350, maxWidth: 350, alignItems: 'center' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://avatars.githubusercontent.com/u/112355675?v=4"
              alt="Photo of Lyssa"
            />
            <CardContent>
            <Typography align="center" component="div" variant="h4">
                Alyssa Martin
              </Typography>
              <Typography align="center" component="div" variant="h6">
                Project Manager
              </Typography>
              <Typography align="center" variant="p"
                component="div">
                <br/>
                Here's a sentence about me. Here's something I like. Here's something I wanna do.
                <br/>
              </Typography>
              <br/>
              <GitHubIcon><Link to="https://github.com/nathaniel-ross">Github</Link></GitHubIcon>
                <LinkedInIcon><Link to=" https://nathaniel-ross.github.io/">Portfolio</Link></LinkedInIcon>
                <WebAssetIcon><Link to=" https://www.linkedin.com/in/nathaniel-rossloyo/">LinkedIn</Link></WebAssetIcon>
              </CardContent>
          </Card>

        </Grid>
      </Box>
    </Container>
  );
}

export default AboutUs