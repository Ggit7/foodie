import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { product_show } from '../../Redux/RecipeSlice'
import {Box,Card,CardHeader,CardMedia,CardContent,Typography,Button} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux'
import'./Single.css'

const SingleProduct = () => {
    const dispatch=useDispatch();
    const {id}=useParams();
    useEffect(()=>{
        dispatch(product_show(id));
        console.log(id)
    },[id]);
    const {product}=useSelector((state)=>state.recipe);
  return (
    <>
         <div className="Show_p">
            <Box className="card_p">
             <CardHeader title={product?.title}/>
              <CardMedia>
                <img
                  src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${product?.image}`}
                  height={250}
                  width={300}
                />
              </CardMedia>
              <CardContent>
                <Typography>{product?.description},</Typography>
              </CardContent>
              <Link to='/showrecipe'>
              <Button variant="text" startIcon={<ArrowBackIcon/>}>Back</Button>
              </Link>
              </Box>    
      </div>
    </>
  )
}

export default SingleProduct
