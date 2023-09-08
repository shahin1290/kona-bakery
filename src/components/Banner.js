import { Typography } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../styles/banner";
import { Colors } from "../styles/theme";

export default function Banner() {
  return (
    <BannerContainer>
      <BannerImage src="banner.png" />
      <BannerContent>
        <Typography
          variant="h5"
          color={Colors.secondary}
          fontSize="3rem"
          fontWeight="bolder"
          fontFamily="cursive"
        >
          Welcome To Kona's Cake
        </Typography>
        <BannerTitle variant="h2">
          Discover the Magic of Homemade Cakes
        </BannerTitle>

        <BannerDescription variant="subtitle">
          Freshly Baked Daily, Perfect for Any Celebration - Birthdays,
          Weddings, and Everyday Cravings.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
