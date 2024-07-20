import React from "react";
import {useDispatch} from "react-redux"
import { product_create } from "../../Redux/RecipeSlice";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import './AddRecipe.css'
const AddRecipe=()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({
      title: "",
      description: "",
    });
    const [image, setimage] = useState("");
    const [imagepreview,setImagepreview]=useState('');
    const handleupload=(e)=>{
      setimage(e.target.files[0]);
      setImagepreview(URL.createObjectURL(e.target.files[0]))
    }
    const [error, setError] = useState();
    const validation = () => {
      let error = {};
      if (!user.title) {
        error.title = "title is required";
      }
      if (!user.description) {
        error.description = "description is requied";
      }
      
      return error;
    };
    let name, value;
    const postUserData = (e) => {
      name = e.target.name;
      value = e.target.value;
      console.log(value)
      if (name === "title") {
        if (value.trim().length === 0) {
          setUser({ ...user, title: "" });
          setError({ ...error, title: "title can't be empty" });
        } else {
          setUser({ ...user, title: value });
          setError({ ...error, title: "" });
        }
      }
      if (name === "description") {
        if (value.trim().lenth === 0) {
          setUser({ ...user, description: "" });
          setError({ ...error, description: "description can't be empty" });
        } else {
          setUser({ ...user, description: value });
          setError({ ...error, description: "" });
        }
      }
     
      
    }
    const submit = (e) => {
      e.preventDefault();
      setError(validation());
      const formData = new FormData();
      formData.append("title", user.title);
      formData.append("description", user.description);
      formData.append("image", image);
      if(Object.keys(validation()).length===0){
      dispatch(product_create(formData)).then(()=>{
        navigate("/showrecipe")
      })
      }
    }
    
    return (
      <>
          <div className="add_recipe">
              <from>
                <Box className='boxA'>
                  <Typography variant="h4" fontWeight={12}>
                    Add Recipe
                  </Typography>
                  <TextField
                  margin="norml"
                  type="text"
                  variant="outlined"
                  placeholder="title"
                  name="title"
                  value={user.title}
                  onChange={(e)=>postUserData(e)}
                  />
                  <TextField sx={{width:'25ch'}}
                  margin="norml"
                  type="text"
                  variant="outlined"
                  multiline
                  placeholder="drescption"
                  name="description"
                  value={user.description}
                  onChange={(e)=>postUserData(e)}
                  />
                  <TextField
            type="file"
            variant="outlined"
            placeholder="Upload Image"
            accept="image/*"
            margin="normal"
            onChange={handleupload}
          />
           {imagepreview && (
              <Box margin="normal">
                <img src={imagepreview} alt="Product" style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
              </Box>
            )}
          <Button onClick={submit} variant="contained" color="success" sx={{mt: 3,borderRadius: 3}}>submit</Button>
                </Box>
              </from>
          </div>
      </>
    )
  }
  export default AddRecipe
  
