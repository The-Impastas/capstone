import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom"


const Index = ({pastas}) => {
  console.log(pastas)
    return (
        <main>
            {pastas?.map((pasta, index) => {
                return (
                    <>
                    
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            component="img"
                            height="140"
                            image= {pasta.image}
                            alt= {pasta.name_of_pasta}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {pasta.name_of_pasta}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <NavLink to={`/show/${pasta.id}`}><Button size="small">{pasta.name_of_pasta}</Button></NavLink>
                          </CardActions>
                        </Card>
          
                    <br />
                    <br />
                    </>
                )
            })}
        </main>

    )

}

export default Index