import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from "@mui/material/Link";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Grid2 from '@mui/material/Unstable_Grid2';

const Home = () => {

const images = [
  {
    url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Angel-Hair-with-Pesto_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814629222.jpeg',
    title: 'View Pastas',
    width: '60%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

  return (
    <Container
    sx={{
      mt: 10,
    }}>
      {/* Box starts the image button box */}
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: 'center', top: 100}}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Link href="/index">
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
          </Link>
        </ImageButton>

      ))}
    </Box>
    
    {/* review section starts here */}
    <Typography variant="h3" textAlign="center"
    sx={{
      mt: 10,
      mb: 10,
    }}>
          Reviews
    </Typography>
      <Box>
      <Grid container sx={{
        justifyContent: 'center',
        alignItems: 'center'
        }}>
        <Grid xs={4} md={5}>
          <Card sx={{ mt: 5, mb: 5, minWidth: 450, maxWidth: 350, alignItems: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                I love pasta pairings! All my pastas are now paired perfectly!
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                - Sara H.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} md={5}>
          <Card sx={{ mt: 5, mb: 5, minWidth: 450, maxWidth: 350, alignItems: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Pasta Pairings helped me plan a delicious dinner
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                - John C.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} md={5}>
          <Card sx={{ mt: 5, mb: 5, minWidth: 450, maxWidth: 350, alignItems: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Pasta Pairings helped me plan a delicious dinner
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                - Nate R.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} md={5}>
          <Card sx={{ mt: 5, mb: 5, minWidth: 450, maxWidth: 350, alignItems: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                I love pasta pairings! All my pastas are now paired perfectly!
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                - Nate R.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Box>
    </Container>
  );
}


export default Home