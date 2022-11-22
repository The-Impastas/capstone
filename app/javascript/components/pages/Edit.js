import React, { useState } from "react";
import { TextField, Button, Paper, Grid, Typography } from "@mui/material";
import { useNavigate, useParams, NavLink } from "react-router-dom";


  const Edit = ({pastas, updatePasta, deletePasta, current_user}) => {
    const { id } = useParams()
    let currentPasta = pastas?.find((pasta) => pasta.id === +id)


  const navigate = useNavigate()
  const [editPasta, setEditPasta] = useState({
    name_of_pasta: currentPasta.name_of_pasta,
    protein: currentPasta.protein,
    sauce: currentPasta.sauce,
    beverage: currentPasta.beverage,
    cheese: currentPasta.cheese,
    recipe_link: currentPasta.recipe_link,
    image: currentPasta.image,
    user_id: current_user.id
  })
  const handleChange = (e) => {
    setEditPasta({ ...editPasta, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    updatePasta(editPasta, currentPasta.id)
    navigate(`/show/${currentPasta.id}`)
  }
  const handleDelete = () => {
    deletePasta(editPasta, currentPasta.id)
    navigate(`/index/${currentPasta.id}`)
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
      alignItems: 'center'}}
      >
      <Typography variant="h5">
        Fill in the form to edit your pasta!
      </Typography>
      <br />
      <TextField required id="outlined-required" name="name_of_pasta" label="Name of Pasta" defaultValue={editPasta.name_of_pasta} onChange={handleChange} sx={{width: 550}}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" name="protein" label="Name of Protein" defaultValue={editPasta.protein} onChange={handleChange} sx={{width: 550}}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" name="sauce" label="Name of Sauce" defaultValue={editPasta.sauce} onChange={handleChange} sx={{width: 550}}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" name="beverage" label="Name of Beverage" defaultValue={editPasta.beverage} onChange={handleChange} sx={{width: 550}}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" name="cheese" label="Name of Cheese" defaultValue={editPasta.cheese} onChange={handleChange} sx={{width: 550}}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" name="recipe_link" l
      abel="Link to Recipe" defaultValue={editPasta.recipe_link} onChange={handleChange} sx={{width: 550}}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" name="image" label="Image Link" defaultValue={editPasta.image} onChange={handleChange} sx={{width: 550}}>
      </TextField>
      <br/>
      <br/>
      <Button onClick={handleSubmit} name="submit">
        Submit Pasta
      </Button>
      <NavLink to={'/index'} style={{ textDecoration: 'none' }}><Button onClick={handleDelete} name="delete">Delete this Pasta</Button></NavLink>
      <NavLink to={'/index'} style={{ textDecoration: 'none' }}><Button>Return to all perfect pastas</Button></NavLink>
    </Paper>
    </Grid>
  )
}

export default Edit