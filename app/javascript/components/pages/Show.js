import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {useParams, NavLink} from "react-router-dom"


const Show = ({pastas, logged_in}) => {
  const { id } = useParams()

  let showPasta = pastas?.find((pasta) => pasta.id === +id)
    return (
    <main>
      <Grid container columnSpacing={1} sx={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
      <Card sx={{
        maxWidth: 600,
        justifyContent: 'center',
        alignItems: 'center',
        mt: 10,
      }}>
        <CardMedia
          component="img"
          height="400"
          image= {showPasta.image}
          alt= {showPasta.name_of_pasta}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {showPasta.name_of_pasta}
            <br />
            Protein: {showPasta.protein}
            <br />
            Sauce: {showPasta.sauce}
            <br /> 
            Beverage: {showPasta.beverage}
            <br />
            Cheese: {showPasta.cheese}
            <br />
            Recipe: {showPasta.recipe_link}
          </Typography>
        </CardContent>
        {logged_in && ( <NavLink to={`/edit/${showPasta.id}`} style={{ textDecoration: 'none' }}><Button>Edit your perfect pasta</Button></NavLink>)}
      </Card>
      <br />
      <br />
      </Grid>
    </main>

    )

}

export default Show