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

const Home = () => {

const images = [
  {
    url: 'https://static.onecms.io/wp-content/uploads/sites/44/2021/08/16/one-skillet-cheesy-ground-chicken-pasta.jpg',
    title: 'View Our Pastas',
    width: '60%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 200,
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
  opacity: 0.3,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 2,
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
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 400, width: '100%', justifyContent: 'center', top: 100}}>
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
                I love these pasta pairings! All my pastas are now paired perfectly, just as the name implies! It's wonderful!
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
              I tried making pasta a few times before and didn't like the results. I just can't cook. I mean, I could do it, but it was never very good. I love pasta and buy lots of it, so I was super excited when I heard about PPP! I tried making pasta again using these recipes it was really easy.
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                - Myles C.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} md={5}>
          <Card sx={{ mt: 5, mb: 5, minWidth: 450, maxWidth: 350, alignItems: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div">
              My family has introduced me to PPP. I learned how to make the most perfect fettuccini dish, and was also able to share my great Uncle John’s secret pasta recipe. PPP has made it easy to share and create new recipes.
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                - Aaron M.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={4} md={5}>
          <Card sx={{ mt: 5, mb: 5, minWidth: 450, maxWidth: 350, alignItems: 'center' }}>
            <CardContent>
              <Typography variant="h5" component="div">
              I use to cry myself to sleep because I had boxes and boxes and boxes of pasta and no ideas what to do with it! Then one day, I found PPP and realized I didn't just have to live surrounded by pasta, I COULD EAT IT!
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                - Sebastian L.
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