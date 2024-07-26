import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { product_delete, product_get } from "../../Redux/RecipeSlice";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
  Pagination,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SweetAlert from "react-bootstrap-sweetalert";

import { Link } from "react-router-dom";

import "./Show.css";

const ShowRecipe = () => {
  const dispatch = useDispatch();
  const { list, totalPages } = useSelector((state) => state.recipe);
  const [totalRecords, setPage] = useState();
  const [isdelete, setIsdelete] = useState(false);
  const [deleteid, setDeleteid] = useState("");

  useEffect(() => {
    dispatch(product_get());
  }, []);
  const handledelete = () => {
    if (deleteid !== "") {
      dispatch(product_delete({ id: deleteid })).then(() => {
        dispatch(product_get());
      });
    }
    setDeleteid("");
    setIsdelete(false);
  };
  const handelchange = (item, pageno) => {
    setPage(pageno);
    dispatch(
      product_get({
        page: pageno,
        perPage: 10,
      })
    );
  };

  return (
    <>
      <div className="Show_r">
      <Grid container spacing={0.5}>
        {list?.map((item) => (
           <Grid  item xs={12} sm={6} md={4} key={item._id}>
            <Box className="card_S">
              <Card>
              <CardHeader title={item.title} />
              <CardMedia>
                <img
                  src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${item?.image}`}
                 
                />
              </CardMedia>
              <Link to={`/single/${item?._id}`}>
              <Button size="small">Read more</Button>
              </Link>
              {/* <CardContent>
                <Typography>{item.description},</Typography>
              </CardContent> */}
              </Card>
              <Box className="ButtonE">
                <Link
                  to=""
                  onClick={() => {
                    setDeleteid(item?._id);
                    setIsdelete(true);
                  }}
                >
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    color="error"
                  >
                    Delete
                  </Button>
                </Link>
                {isdelete && (
                  <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={handledelete}
                    onCancel={() => setIsdelete(false)}
                    confirmBtnStyle={{ backgroundColor: "blue",color: "#fff",textDecoration:"none", border: "none", padding: "10px 20px", borderRadius: "5px" }}
                    cancelBtnStyle={{ backgroundColor: "#f44336", color: "#fff", textDecoration:"none", border: "none", padding: "10px 20px", borderRadius: "5px" }}
                    focusCancelBtn
                  >
                    You will not be able to recover this imaginary file!
                  </SweetAlert>
                )}
                 
                  {/* <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    color="primary"
                  >
                    Show
                  </Button> */}
                <Link to={`/edit/${item?._id}`}>
                  <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    color="primary"
                  >
                    edit
                  </Button>
                </Link>
                </Box>
                
              </Box>  
              </Grid>
))}
</Grid>
      </div>
      <Box display="flex" justifyContent="center"  bgcolor={'brown'}>
        <Pagination
          count={totalPages}
          totalRecords={totalRecords}
          onChange={handelchange}
        />
      </Box>
    </>
  );
};

export default ShowRecipe;
