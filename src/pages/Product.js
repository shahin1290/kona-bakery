import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import images from "../api-mock.json";

const Product = () => {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const found = images.resources.find((item) => item.id == id);

    if (found) setItems(found.images);
  }, [id]);

  console.log(items);

  return (
    <>
      {items.length > 0
        ? items.map((item) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item}
                  alt="green iguana"
                />
                <CardContent></CardContent>
              </CardActionArea>
            </Card>
          ))
        : "Not Found"}
    </>
  );
};

export default Product;
