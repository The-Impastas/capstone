import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Index = ({pastas}) => {
  console.log(pastas)
    return (
        <main>
            {pastas.map((pasta, index) => {
                return (
                    <>
                    export default function MediaCard() {

                        <>
                      return (
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            component="img"
                            height="140"
                            image= {pasta.image}
                            alt= {pasta.name}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              pasta.name
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">{pasta.name}</Button>
                          </CardActions>
                        </Card>
                      );
                      </>
                      }
                    
                    </>
                )
            })}
        </main>

    )

}

export default Index