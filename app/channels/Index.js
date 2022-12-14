import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom"
import Link from '@mui/material'
import {Container, Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';



const Index = ({pastas}) => {
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

  const [newRating, setNewRating] = useState({
    userRating: ""
  })

  const handleChange = (e) => {
    setNewRating({ ...newRating, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    addRating(newRating)
    
  }

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
        All Our Pasta Pairings
      </Typography>
      <Grid container spacing={{ xs: 1, md: 5 }} columns={{ xs: 1, sm: 8, md: 12 }}>

            {pastas?.map((pasta, index) => {
                return (
                    <Grid item xs={2} sm={4} md={4}>
                      
                        <Card sx={{ m: 5, minWidth: 350, maxWidth: 350, alignItems: 'center' }}>
                          <CardMedia
                            component="img"
                            height="240"
                            image= {pasta.image}
                            alt= {pasta.name_of_pasta}
                          />
                          <CardContent>
                            <Typography align="center" variant="h5" component="div">
                              <Button
                              size="large"
                              variant="outlined"
                              component ={NavLink} to={`/show/${pasta.id}`}>{pasta.name_of_pasta}</Button>
                            </Typography>
                            <br/>
                            <Typography component="legend">Rate this Recipe</Typography>
                            <br/>
                            <StyledRating
                            align="center"
                            name="customized-color"
                            defaultValue={2}
                            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                            precision={0.5}
                            icon={<FavoriteIcon fontSize="inherit" />}
                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" 
                            onChange ={handleChange}/>}
                            />
                            <br/>
                            <Button onClick={handleSubmit} 
                              name="submit"
                              align="center">
                              Submit Rating
                            </Button>
                          </CardContent>
                        </Card>
                        
                    <br />
                    <br />
                    </Grid>
                    
                    
                )
            })}
          </Grid>
            
        </Container>
    )

}

export default Index