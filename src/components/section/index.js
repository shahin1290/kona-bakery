import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../../styles/theme";

const Section = () => {
  return <PromotionsContainer>Cakes</PromotionsContainer>;
};

export default Section;

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "40px 0px 40px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0px 20px 0px",
  overflow: "hidden",
  color: Colors.secondary,
  fontSize: "5rem",
  fontWeight: "bolder",
  fontFamily: "cursive"
}));
