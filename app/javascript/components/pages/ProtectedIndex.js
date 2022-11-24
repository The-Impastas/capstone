import * as React from 'react';
import {Button, Card, CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';
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
          fontWeight: 800,
        }}>
        Your Pasta Pairings
      </Typography>

      <Typography align="center" variant="h5" component="div">
        <Button
        size="large"
        variant="contained"
        component ={NavLink} to={`/new`}>Create a New Pasta Pairing</Button>
      </Typography>

      <Grid container spacing={{ xs: 1, md: 5 }} columns={{ xs: 1, sm: 8, md: 12 }}>

          {currentUserPasta?.map((pasta, idx) => {
        return (
          <Grid item xs={2} sm={4} md={4}>
                <Card sx={{ m: 5, minWidth: 300, maxWidth: 300, alignItems: 'center' }}>
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

export default ProtectedIndex