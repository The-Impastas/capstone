import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import { useNavigate, useParams, NavLink } from "react-router-dom";

  const Edit = ({pastas, updatePasta, deletePasta, current_user}) => {
    console.log(pastas)
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
    console.log("edit pasta", editPasta)
    navigate(`/show/${currentPasta.id}`)
  }
  const handleDelete = () => {
    deletePasta(editPasta, currentPasta.id)
    console.log("delete pasta", editPasta)
    navigate(`/index/${currentPasta.id}`)
  }

  return (
    <Paper>
      <TextField required id="outlined-required" label="Name of Pasta" defaultValue={editPasta.name_of_pasta} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Name of Protein" defaultValue={currentPasta.protein} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Name of Sauce" defaultValue={currentPasta.sauce} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Name of Beverage" defaultValue={currentPasta.beverage} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Name of Cheese" defaultValue={currentPasta.cheese} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Link to Recipe" defaultValue={currentPasta.recipe_link} onChange={handleChange}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Image Link" defaultValue={currentPasta.image} onChange={handleChange}>
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