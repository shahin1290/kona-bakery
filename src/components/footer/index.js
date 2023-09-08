import {
  Grid,
  List,
  ListItemText,
  Typography,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import { FooterTitle } from "../../styles/footer";
import Facebook from "@mui/icons-material/Facebook";
import Link from "@mui/material/Link";
import LocationOn from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={6} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About me</FooterTitle>
          <Typography variant="caption2">
            I go by the name Kona, and my deep enthusiasm lies in the art of
            baking. I take pleasure in crafting cakes that not only exhibit an
            appealing appearance but also deliver an exceptional taste.{" "}
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100063951735999"
            >
              <Facebook />
            </Link>
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">contacts</FooterTitle>
          <List>
            <ListItem>
              <ListItemIcon>
                <LocationOn color="primary" />
              </ListItemIcon>
              <ListItemText primary="Skattegården, Linköping" />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <Phone color="primary" />
              </ListItemIcon>
              <ListItemText primary="0724336914" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
