import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import images from "../api-mock.json";

const Products = () => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Container maxWidth="lg">
      <ImageList variant="masonry" cols={matches ? 2 : 4} gap={8}>
        {images.resources.map((item) => (
          <SimpleReactLightbox>
            <SRLWrapper>
              {" "}
              <ImageListItem
                key={item.id}
                sx={{
                  transition: "transform .3s linear",
                  cursor: "pointer",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                <img
                  src={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                  srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt="cake"
                  loading="lazy"
                />
                <ImageListItemBar title={item.id} />
              </ImageListItem>
            </SRLWrapper>
          </SimpleReactLightbox>
        ))}
      </ImageList>
    </Container>
  );
};

export default Products;
