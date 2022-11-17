import React from "react";
import { styled } from '@mui/material/styles';
import {Box, Button, Typography, Container , CardActions, CardMedia, Grid, Card, CardContent, Link  } from '@mui/material'
import { NavLink } from "react-router-dom";

const AboutUs = () => {


  return (
    <Container
    sx={{
      mt: 10,
    }}>
    {/* review section starts here */}
    <Typography variant="h3" textAlign="center"
    sx={{
      mt: 10,
      mb: 10,
    }}>
          About Us
    </Typography>
      <Box>
      <Grid container  columnSpacing={2} sx={{
        justifyContent: 'center',
        alignItems: 'center'
        }}
        >
                 {/* Nate's card */}
                <Card sx={{ m: 5, minWidth: 450, maxWidth: 350, alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image= "https://avatars.githubusercontent.com/u/111712171?v=4"
                        alt= "Photo of Nate" 
                    />
                    <CardContent>
                        <Typography gutterBottom            variant="h5" 
                        component="div">
                            Nate Ross 
                        </Typography>
                        <Typography gutterBottom            variant="h6" 
                        component="div">
                            Design Lead
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="https://github.com/nathaniel-ross"><Button size="small">Github</Button></Link>
                    </CardActions>
                    <CardActions>
                        <Link to=" https://nathaniel-ross.github.io/
                        "><Button size="small">Portfolio</Button></Link>
                    </CardActions>
                    <CardActions>
                        <Link to=" https://www.linkedin.com/in/nathaniel-rossloyo/"><Button size="small">LinkedIn</Button></Link>
                    </CardActions>
                </Card>
                {/* Christian's card */}
                <Card sx={{ m: 5,  minWidth: 450, maxWidth: 350, alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image= "https://avatars.githubusercontent.com/u/109927283?s=400&u=0a36efd5f927b79d3add60e7ee71997a6f62fb8b&v=4"
                        alt= "Photo of Christian" 
                    />
                    <CardContent>
                        <Typography gutterBottom            variant="h5" 
                        component="div">
                            Christian Macias
                        </Typography>
                        <Typography gutterBottom            variant="h6" 
                        component="div">
                            Product Manager
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="https://github.com/nathaniel-ross"><Button size="small">Github</Button></Link>
                    </CardActions>
                    <CardActions>
                        <Link to=" https://nathaniel-ross.github.io/
                        "><Button size="small">Portfolio</Button></Link>
                    </CardActions>
                    <CardActions>
                        <Link to=" https://www.linkedin.com/in/nathaniel-rossloyo/"><Button size="small">LinkedIn</Button></Link>
                    </CardActions>
                </Card>
                {/* Heath's card */}
                <Card sx={{ m: 5, minWidth: 450, maxWidth: 350, alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image= "https://avatars.githubusercontent.com/u/95312091?v=4"
                        alt= "Photo of Heath and puppers" 
                    />
                    <CardContent>
                        <Typography gutterBottom            variant="h5" 
                        component="div">
                            Heath Haupt
                        </Typography>
                        <Typography gutterBottom            variant="h6" 
                        component="div">
                            Tech Lead
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="https://github.com/nathaniel-ross"><Button size="small">Github</Button></Link>
                    </CardActions>
                    <CardActions>
                        <Link to=" https://nathaniel-ross.github.io/
                        "><Button size="small">Portfolio</Button></Link>
                    </CardActions>
                    <CardActions>
                        <Link to=" https://www.linkedin.com/in/nathaniel-rossloyo/"><Button size="small">LinkedIn</Button></Link>
                    </CardActions>
                </Card>
                {/* Lyssa's card */}
                <Card sx={{ m: 5, minWidth: 450, maxWidth: 350, alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image= "https://avatars.githubusercontent.com/u/112355675?v=4"
                        alt= "Photo of Lyssa" 
                    />
                    <CardContent>
                        <Typography gutterBottom            variant="h5" 
                        component="div">
                            Alyssa Martin
                        </Typography>
                        <Typography gutterBottom            variant="h6" 
                        component="div">
                            Project Manager
                        </Typography>
                        <Typography gutterBottom            variant="p" 
                        component="div">
                            Here's a sentence about me. Here's something I like. Here's something I wanna do. 
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Link to="https://github.com/nathaniel-ross"><Button size="small">Github</Button></Link>
                    </CardActions>
                    <CardActions>
                        <Link to=" https://nathaniel-ross.github.io/
                        "><Button size="small">Portfolio</Button></Link>
                    </CardActions>
                    <CardActions>
                        <Link to=" https://www.linkedin.com/in/nathaniel-rossloyo/"><Button size="small">LinkedIn</Button></Link>
                    </CardActions>
                </Card>
            
            </Grid>
        </Box>
    </Container>
  );
}

export default AboutUs