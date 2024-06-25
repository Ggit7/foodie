import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { product_update,product_edit } from "../../Redux/RecipeSlice";
import{Box,TextField,Typography,Button} from '@mui/material'

const EditRecipe = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const { id } = useParams();
    useEffect(() => {
      dispatch(product_edit(id));
    }, [id]);
    const { product } = useSelector((state) => state.recipe);
    const [image, setImage] = useState("");
    const handleupload=(e)=>{
      setImage(e.target.files[0])
    }
    const [user, setUser] = useState({
      title: "",
      description: "",
    });
    const [error, setError] = useState();
    const validation = () => {
      let error = {};
      if (!user.title) {
        error.name = "enter your name";
      }
      if (!user.description) {
        error.email = "email is required";
      }
   
      return error;
    };
    let name, value;
    const postUserData = (e) => {
      name = e.target.name;
      value = e.target.value;
      if (name === "title") {
        if (value.trim().length === 0) {
          setUser({ ...user, title: "" });
          setError({ ...error, title: "name is requred" });
        } else {
          setUser({ ...user, title: value });
          setError({ ...error, title: "" });
        }
      }
  
      if (name === "description") {
        if (value.trim().length === 0) {
          setUser({ ...user, description: "" });
          setError({ ...error, description: "email is requred" });
        } else {
          setUser({ ...user, description: value });
          setError({ ...error, description: "" });
        }
      }
    };
    const Submit = (e) => {
      e.preventDefault();
      setError(validation());
      const formData = new FormData();
      formData.append("title", user.title);
      formData.append("description", user.description);
      formData.append("image", image);
      formData.append('id',id)
      dispatch(product_update(formData)).then(()=>{
        alert('edit successfull')
        navigate("/showrecipe")
      });
    };
    useEffect(() => {
      if (product !== null) {
        setUser({
          title: product?.title,
          description: product?.description,
        });
      //   setImage({
      //     image : product?.image,
      //  })
      }
    }, [product]);
    return (
      <>
         <div className="add_recipe">
              <from>
                <Box className='boxA'>
                  <Typography>
                    AddRecipe
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
                  <TextField 
                  margin="norml"
                  type="text"
                  variant="outlined"
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
          <Button onClick={Submit} variant="contained" color="success" sx={{mt: 3,borderRadius: 3}}>submit</Button>
                </Box>
              </from>
          </div>
      </>
    );
  }
  

export default EditRecipe
