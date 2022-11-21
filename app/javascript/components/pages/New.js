import React, { useState } from "react";
import { TextField, Input, Button, InputLabel, Paper, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const New = ({ createPasta, current_user }) => {
  const navigate = useNavigate()
  const [newPasta, setNewPasta] = useState({
    name_of_pasta: "",
    protein: "",
    sauce: "",
    beverage: "",
    cheese: "",
    recipe_link: "",
    image: "",
    user_id: current_user.id
  })
  const handleChange = (e) => {
    setNewPasta({ ...newPasta, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    createPasta(newPasta)
    navigate("/index")
  }

  return (
    <Grid container columnSpacing={2} sx={{
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
    <Paper sx={{
      m: 5,
      p: 3,
      mt: 10,
      justifyContent: 'center',
      alignItems: 'center'}}>
      <Typography variant="h5">
        Fill in the form to create your pasta!
      </Typography>
      <br />
      <TextField 
      sx={{width: 550}}
      required id="outlined-required" 
      label="Name of Pasta" 
      name="name_of_pasta" 
      onChange={handleChange} 
      value={newPasta.name_of_pasta}>
      </TextField>
      <br />
      <br />
      <TextField 
      sx={{width: 550}}
      required id="outlined-required" 
      label="Name of Protein" 
      name="protein" 
      onChange={handleChange} 
      value={newPasta.protein}>
      </TextField>
      <br />
      <br />
      <TextField 
      sx={{width: 550}}
      required id="outlined-required" 
      label="Name of Sauce" 
      name="sauce" 
      onChange={handleChange} 
      value={newPasta.sauce}>
      </TextField>
      <br />
      <br />
      <TextField 
      sx={{width: 550}}
      required id="outlined-required" 
      label="Name of Beverage" 
      name="beverage" 
      onChange={handleChange} 
      value={newPasta.beverage}>
      </TextField>
      <br />
      <br />
      <TextField 
      sx={{width: 550}}
      required id="outlined-required" 
      label="Name of Cheese" 
      name="cheese" 
      onChange={handleChange} 
      value={newPasta.cheese}>
      </TextField>
      <br />
      <br />
      <TextField 
      sx={{width: 550}}
      required id="outlined-required" 
      label="Link to Recipe" 
      name="recipe_link" 
      onChange={handleChange} 
      value={newPasta.recipe_link}>
      </TextField>
      <br />
      <br />
      <TextField 
      sx={{width: 550}}
      required id="outlined-required" 
      label="Image Link" 
      name="image" 
      onChange={handleChange} 
      value={newPasta.image}>
      </TextField>
      <br />
      <br />
      <Button onClick={handleSubmit} 
              name="submit">
        Submit Pasta
      </Button>
    </Paper>
    </Grid>
  )
}

export default New