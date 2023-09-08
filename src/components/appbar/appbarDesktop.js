import { ListItemText, ListItem, ListItemIcon } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import LocationOn from "@mui/icons-material/LocationOn";
import Phone from "@mui/icons-material/Phone";
import Facebook from "@mui/icons-material/Facebook";
import Link from "@mui/material/Link";

export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader variant="h1">Kona's Cake</AppbarHeader>
      <MyList type="row">
        <ListItem>
          <ListItemIcon>
            <LocationOn />
          </ListItemIcon>
          <ListItemText secondary="Skattegården, Linköping" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Phone />
          </ListItemIcon>
          <ListItemText secondary="0724336914" />
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100063951735999"
          >
            <Facebook />
          </Link>
        </ListItem>
      </MyList>
    </AppbarContainer>
  );
}
