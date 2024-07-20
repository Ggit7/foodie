import React from "react";
import { Box ,Button} from "@mui/material";
import Brands from "../Brands/Brands";
import Grid from "@mui/material/Grid";
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import "./About.css";

const About = () => {
  return (
    <>
    <div className="about_intro">
      <h1>About</h1><h3>me</h3>
    </div>
      <div className="about">
        <Box className="image">
          <img src="../image/food2-plate.png" alt="image" />
        </Box>
        <Box className="text">
            {/* <h1>About Me</h1> */}
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nulla,
          ullam dolor minus delectus aspernatur nihil eum debitis eius dolore
          molestiae optio odit quibusdam, ad magnam doloremque ratione?
          Consequatur, architecto! Necessitatibus esse at ullam vitae maxime
          itaque iusto, explicabo molestiae exercitationem nobis minima
          voluptate placeat accusamus beatae? Ipsa ratione laudantium earum
          soluta accusantium quo totam eum! Ducimus quia deleniti fuga? Ad quis
          vitae sapiente officiis dicta non officia beatae, harum, error nobis
          in, voluptatem voluptate voluptas repudiandae quisquam eos commodi
          sunt ex repellat autem. Quae error accusantium dolore tenetur cum.
          Laborum ullam commodi eligendi, nihil, laboriosam natus nobis quasi
          repellendus, architecto quia ipsa? Provident, ratione recusandae!
          Tempora quas reiciendis vel ad iusto! Recusandae facilis inventore
          ratione delectus cum. Pariatur, soluta! Quasi quo vitae, sed molestias
          reiciendis, facere ullam inventore esse accusantium commodi suscipit,
          minus iste ratione adipisci. Similique, reiciendis accusamus?
          Voluptatibus dolor deleniti iste totam minus! Placeat molestias
          provident unde.

                         <br/> <p style={{textAlign:"center"}}>.......Gourab das.</p>
          </p>
        </Box>
      </div>
      <div>
      <Grid container  className="grid1" >
            {/* On small screens, each item takes full width */}
            <Grid className="sub-grid" item xs={12} sm={12} md={6}>
                {/* Content for the first column */}
                <div className="sub-grid-div" >
                    <img src="../image/cook.jpg" alt="" />
                </div>
            </Grid>
            <Grid item xs={12} sm={12}md={6}>
                {/* Content for the second column */}
                <div className="sub-grid-text">
                    <h2>Enjoy An Exceptional <br /> Journey of Taste</h2>
                    <p>Proin feugiat diam vitae ligul imperd dapibus vest <br /> ibul tellus libero, at fermentum mi euismodut. Viva <br /> 
                    lroin feugiat diam vitae ligul imperd dapibus veste <br /> buli tellus libero, at fermentum.</p>
                </div>
                
            </Grid>
            
        </Grid>
      </div>
      <div className="brand">
        <h3>Collaborating partner</h3>
      <Brands />
      </div>
    </>
  );
};

export default About;
