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
import { Link } from "react-router-dom";
import images from "../api-mock.json";

const Products = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justify="center"
      >
        {images.resources.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id} my={2}>
            <Card sx={{ maxWidth: 345 }}>
              <Link
                to={`/products/${image.id}`}
                style={{ textDecoration: "none" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={image.url}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="secondary"
                    >
                      Vanilla Strawberry Cake
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Details
                  </Button>
                </CardActions>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
