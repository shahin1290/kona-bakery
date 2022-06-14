import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import images from "./api-mock.json";
import "./App.css";

const Products = () => {
  const [imageList, setImageList] = useState(images.resources);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        {imageList.map((image) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={image.url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Vanilla Strawberry Cake
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
