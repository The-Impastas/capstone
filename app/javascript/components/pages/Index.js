import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom"
import Link from '@mui/material'
import {Container} from '@mui/material'

const Index = ({pastas}) => {
  console.log(pastas)
    return (
      <Container
      sx={{
        mt: 10,
      }}>
            {pastas?.map((pasta, index) => {
                return (
                    <>
                    
                        <Card x={{ display: 'flex', flexWrap: 'wrap', minWidth: 50, width: '50%', justifyContent: 'center', top: 100}}>
                          <CardMedia
                            component="img"
                            height="140"
                            image= {pasta.image}
                            alt= {pasta.name_of_pasta}
                          />
                          <CardContent>
                            <Typography align="center" variant="h5" component="div">
                              <NavLink to={`/show/${pasta.id}`}>{pasta.name_of_pasta}</NavLink>
                            </Typography>
                          </CardContent>
                        </Card>
          
                    <br />
                    <br />
                    </>
                )
            })}
        </Container>

    )

}

export default Index