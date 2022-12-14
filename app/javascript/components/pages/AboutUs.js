import React from "react";
import { styled } from '@mui/material/styles';
import { Box, IconButton, Button, Typography, Container, CardActions, CardMedia, Grid, Card, CardContent, Link } from '@mui/material'
import { NavLink } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const AboutUs = () => {


  return (
    <Container
      sx={{
        mt: 10,
      }}>
      <Typography variant="h3" textAlign="center"
        sx={{
          mt: 10,
          fontWeight: 700,
          mb: 5,
        }}>
        Meet the Team
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
              <Typography align="center" variant="h4" component="div" sx={{fontWeight: 700}}>
                Nate Ross
              </Typography>
              <Typography align="center" component="div" variant="h6">
                Design Lead
              </Typography >
              <Typography align="center" variant="body2"
                component="div">
                <br/>
                Hi, I'm Nate, a full-stack developer with an emphasis on accessible design. My goal is to make the internet a more user-friendly place, one website at a time.
                <br/>
                <br/>
              </Typography>
              <br/>
              <IconButton color="primary" href='https://github.com/nathaniel-ross' target="_blank">
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" href='https://www.linkedin.com/in/nathaniel-rossloyo/' target="_blank">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="primary" href='https://nathaniel-ross.github.io/' target="_blank">
                <LanguageIcon />
              </IconButton>
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
            <Typography align="center" component="div" variant="h4" sx={{fontWeight: 700}}>
                Christian Macias
              </Typography>
              <Typography align="center" component="div" variant="h6">
                Product Manager
              </Typography>
              
              <Typography align="center" variant="body2"
                component="div">
                <br/>
                My name is Christian, I am a Full-stack Developer. I wish to take the knowledge that I have obtained and reach a whole new height in the coding world. Let us break and fix some applications.
                <br/>
              </Typography>
              <br/>
              <IconButton color="primary" href='https://github.com/cmacias56' target="_blank">
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" href='https://www.linkedin.com/in/christianmacias91/' target="_blank">
                <LinkedInIcon />
              </IconButton>
              {/* button for portfolio */}
              {/* <IconButton color="primary" href='https://www.google.com' target="_blank">
                <LanguageIcon />
              </IconButton> */}
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
            <Typography align="center" component="div" variant="h4" sx={{fontWeight: 700}}>
                Heath Haupt
              </Typography>
              <Typography align="center" component="div" variant="h6">
                Tech Lead
              </Typography>
              <Typography align="center" variant="body2"
                component="div">
                <br/>
                Hello, I'm Heath. I am a developer with a passion for the outdoors. I hope to one day help others contribute positively to wildlife conservation and sustainable living with the help of technology.
                <br/>
                <br/>
              </Typography>
              <br/>
              <IconButton color="primary" href='https://github.com/Heath-H' target="_blank">
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" href='https://www.linkedin.com/in/heath-haupt-861735176/' target="_blank">
                <LinkedInIcon />
              </IconButton>
              {/* button for portfolio */}
              {/* <IconButton color="primary" href='https://www.google.com' target="_blank">
                <LanguageIcon />
              </IconButton> */}
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
            <Typography align="center" component="div" variant="h4" sx={{fontWeight: 700}}>
                Alyssa Martin
              </Typography>
              <Typography align="center" component="div" variant="h6">
                Project Manager
              </Typography>
              <Typography align="center" variant="body2"
                component="div">
                <br/>
                After a stint in the Air Force, a marriage, two kids, and an MBA, I took the curve-ball of life and became a full stack web developer through the wonderful LEARN Academy coding bootcamp program. 
                <br/>
              </Typography>
              <br/>
              <IconButton color="primary" href='https://github.com/TheRealRion' target="_blank">
                <GitHubIcon />
              </IconButton>
              <IconButton color="primary" href='https://www.linkedin.com/in/lyssammartin/' target="_blank">
                <LinkedInIcon />
              </IconButton>
              {/* button for portfolio */}
              <IconButton color="primary" href='https://therealrion.github.io/' target="_blank">
                <LanguageIcon />
              </IconButton>
            </CardContent>
          </Card>

        </Grid>
      </Box>
    </Container>
  );
}

export default AboutUs