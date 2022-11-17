import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useParams, NavLink} from "react-router-dom"


const Show = ({pastas, logged_in}) => {
  console.log("pasta", pastas)
  const { id } = useParams()

  let showPasta = pastas?.find((pasta) => pasta.id === +id)
    return (
    <main>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
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
        {logged_in && ( <NavLink to={`/edit/${showPasta.id}`}><button>Edit your perfect pasta</button></NavLink>)}
      </Card>
      <br />
      <br />
    </main>

    )

}

export default Show