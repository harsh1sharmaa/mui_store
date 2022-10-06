import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import  CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import {Routes, Route, useNavigate,useLocation} from 'react-router-dom';
import Loder from "../loder/loder"

function Detail(props) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.productId);
  const productId=location.state.productId;
 
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/'+productId).then((res) => {
      setData(res.data);
    });

  },[]);
  var cardStyle = {
    display: "block",
    width: "40vw",
    transitionDuration: "0.3s",
    height: "45 vw",
  };

  return (
    <div>
      {data == "" ? (
        <Loder></Loder>
      ) : (
        <Container>
          <Grid container pt={3} spacing={0}>
            <Grid item lg={8}>
              <Card style={cardStyle}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Word of the Day
                  </Typography>
                  <CardMedia
                    component="img"
                    height="300"
                    image={data.image}
                    alt="green iguana"
                  />
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                   {data.description}
                  </Typography>
                </CardContent>
                <Typography component="legend">Rating</Typography> 
                <Rating name="read-only" value={data.rating.rate} readOnly />
                <CardActions>
                <Button variant="contained" onClick={() =>{ 
                  // console.log(location.pathname.pop())
                  navigate('../cart');
                  }}>add to cart</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item lg={4}>
              right
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}

export default Detail;
