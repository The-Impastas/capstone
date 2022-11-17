import React, { useState } from "react";
import { TextField, Input, Button, InputLabel, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const New = ({ createPasta }) => {

  const navigate = useNavigate()
  const [newPasta, setNewPasta] = useState({
    name_of_pasta: "",
    protein: "",
    sauce: "",
    beverage: "",
    cheese: "",
    recipe_link: "",
    image: ""
  })
  const handleChange = (e) => {
    setNewPasta({ ...newPasta, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    createPasta(newPasta)
    navigate("/index")
  }

  return (

    <Paper>
      <h1>Fill in the form to Create your pasta!</h1>
      <br />
      <TextField required id="outlined-required" label="Name of Pasta" name="name_of_pasta" onChange={handleChange} value={newPasta.name_of_pasta}>
      </TextField>
      <br />
      <br />
      <TextField required id="outlined-required" label="Name of Protein" name="protein" onChange={handleChange} value={newPasta.protein}>
      </TextField>
      <br />
      <br />
      <TextField required id="outlined-required" label="Name of Sauce" name="sauce" onChange={handleChange} value={newPasta.sauce}>
      </TextField>
      <br />
      <br />
      <TextField required id="outlined-required" label="Name of Beverage" name="beverage" onChange={handleChange} value={newPasta.beverage}>
      </TextField>
      <br />
      <br />
      <TextField required id="outlined-required" label="Name of Cheese" name="cheese" onChange={handleChange} value={newPasta.cheese}>
      </TextField>
      <br />
      <br />
      <TextField required id="outlined-required" label="Link to Recipe" name="recipe_link" onChange={handleChange} value={newPasta.recipe_link}>
      </TextField>
      <br />
      <br />
      <TextField required id="outlined-required" label="Image Link" name="image" onChange={handleChange} value={newPasta.image}>
      </TextField>
      <br />
      <br />
      <Button onClick={handleSubmit} name="submit">
        Submit Pasta
      </Button>
    </Paper>
  )
}

export default New