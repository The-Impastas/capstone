import React, { useState } from "react";
import { TextField, Input, Button, InputLabel, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const New = ({pastas}) => {

  const navigate = useNavigate()
  const [newPasta, setNewPasta] = useState({
    Name_of_pasta: "",
    Protein: "",
    Sauce: "",
    Beverage: "",
    Cheese: "",
    Recipe_link: "",
    Image: ""
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
      <TextField required id="outlined-required" label="Name of Pasta">
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Name of Protein">
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Name of Sauce">
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Name of Beverage">
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Name of Cheese">
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Link to Recipe">
      </TextField>
      <br/>
      <br/>
      <TextField required id="outlined-required" label="Image Link">
      </TextField>
      <br/>
      <br/>
      <Button onClick={handleSubmit} name="submit">
        Submit Pasta
      </Button>
    </Paper>
  )
}

export default New