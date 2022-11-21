import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import { useNavigate, useParams, NavLink } from "react-router-dom";

  const Edit = ({pastas, updatePasta, deletePasta, current_user}) => {
    const {id} = useParams()
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
    <Paper>
      <h1>Edit your pasta here..</h1>
      <TextField required id="outlined-required" name="name_of_pasta" label="Name of Pasta" defaultValue={editPasta.name_of_pasta} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" name="protein" label="Name of Protein" defaultValue={editPasta.protein} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" name="sauce" label="Name of Sauce" defaultValue={editPasta.sauce} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" name="beverage" label="Name of Beverage" defaultValue={editPasta.beverage} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" name="cheese" label="Name of Cheese" defaultValue={editPasta.cheese} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" name="recipe_link" label="Link to Recipe" defaultValue={editPasta.recipe_link} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" name="image" label="Image Link" defaultValue={editPasta.image} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <Button onClick={handleSubmit} name="submit">
        Submit Pasta
      </Button>
      <NavLink to={'/index'}><Button onClick={handleDelete} name="delete">Delete this Pasta</Button></NavLink>
      <NavLink to={'/index'}><Button>Return to all perfect pastas</Button></NavLink>
    </Paper>
  )
}

export default Edit