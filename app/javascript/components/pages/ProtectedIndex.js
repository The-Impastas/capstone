import * as React from 'react';
import {Card, CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';
import { NavLink } from "react-router-dom";


const ProtectedIndex = ({ pastas, current_user}) => {
  const currentUserPasta = pastas?.filter(item => item.user_id === current_user.id)
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
        Your Pasta Pairings
      </Typography>

      <Typography align="center" variant="h5" component="div">
        <NavLink to={`/new`}>Create a New Pasta Pairing</NavLink>
      </Typography>
        

          {currentUserPasta?.map((pasta, idx) => {
        return (
          <Grid container columnSpacing={2} sx={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
            
                <Card sx={{ m: 5, minWidth: 200, maxWidth: 300, alignItems: 'center' }}>
                  <CardMedia
                    component="img"
                    height="240"
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
            </Grid>
                )
            })}
        </Container>

    )

}

export default ProtectedIndex