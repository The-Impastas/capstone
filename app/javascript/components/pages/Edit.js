import React, { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import { useNavigate, useParams, NavLink } from "react-router-dom";

  const Edit = ({pastas, updatePasta}) => {
    console.log(pastas)
    const {id} = useParams()
    let currentPasta = pastas?.find((pasta) => pasta.id === +id)

  const navigate = useNavigate()
  const [editPasta, setEditPasta] = useState({
    Name_of_pasta: currentPasta.name_of_pasta,
    Protein: currentPasta.protein,
    Sauce: currentPasta.sauce,
    Beverage: currentPasta.beverage,
    Cheese: currentPasta.cheese,
    Recipe_link: currentPasta.recipe_link,
    Image: currentPasta.image
  })
  const handleChange = (e) => {
    setEditPasta({ ...editPasta, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    updatePasta(editPasta, currentPasta.id)
    navigate(`/show/${currentPasta.id}`)
  }

  return (
    <Paper>
      <TextField required id="outlined-required" label="Name of Pasta" defaultValue={currentPasta.name_of_pasta}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Name of Protein" defaultValue={currentPasta.protein}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Name of Sauce" defaultValue={currentPasta.sauce}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Name of Beverage" defaultValue={currentPasta.beverage}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Name of Cheese" defaultValue={currentPasta.cheese}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Link to Recipe" defaultValue={currentPasta.recipe_link}>
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Image Link" defaultValue={currentPasta.image}>
      </TextField>
      <br/>
      <br/>
      <Button onClick={handleSubmit} name="submit">
        Submit Pasta
      </Button>
      <NavLink to={'/index'}><Button>Return to all perfect pastas</Button></NavLink>
    </Paper>
  )
}

export default Edit