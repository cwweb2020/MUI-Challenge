import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const drawerWidth = 240;

  const { sidebar, toggleSideBar } = useContext(AppContext);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: 240, md: 500 }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={sidebar}
          onClose={toggleSideBar}
          ModalProps={{
            keepMounted: false,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <div>
            <Toolbar />
            <Divider />
            <List>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "nav-item")}
                to="/"
                onClick={toggleSideBar}
              >
                <ListItem disablePadding sx={{ my: 2 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <DonutSmallIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? "active" : "nav-item")}
                to="/new-card"
                onClick={toggleSideBar}
              >
                <ListItem disablePadding sx={{ my: 2 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCardIcon />
                    </ListItemIcon>
                    <ListItemText primary={"New Card"} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? "active" : "nav-item")}
                onClick={toggleSideBar}
                to="/my-cards"
              >
                <ListItem disablePadding sx={{ my: 2 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <CreditCardIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={"My Cards"} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            </List>
          </div>
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <div>
            <Toolbar />
            <Divider />
            <List>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "nav-item")}
                to="/"
              >
                <ListItem disablePadding sx={{ my: 2 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <DonutSmallIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? "active" : "nav-item")}
                to="/new-card"
              >
                <ListItem disablePadding sx={{ my: 2 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCardIcon />
                    </ListItemIcon>
                    <ListItemText primary={"New Card"} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? "active" : "nav-item")}
                to="/my-cards"
              >
                <ListItem disablePadding sx={{ my: 2 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <CreditCardIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={"My Cards"} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            </List>
          </div>
        </Drawer>
      </Box>
    </Box>
  );
};

export default SideBar;
