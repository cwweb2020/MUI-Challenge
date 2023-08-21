import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import useAppBar from "../../hooks/useAppBar";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

const Appbar = () => {
  const { menu, handleClose, handleMenu } = useAppBar();
  const { toggleSideBar,user,logout} = useContext(AppContext);
  const drawerWidth = 240;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="secondary"
        position="static"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={toggleSideBar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Card-Guard
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={menu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(menu)}
                onClose={handleClose}
              >
                <MenuItem disabled onClick={handleClose}>
                  <ContactEmergencyIcon sx={{ mx: 1 }} />
                  <Typography>{user}</Typography>
                </MenuItem>
                <MenuItem onClick={logout}>
                  <LogoutIcon sx={{ mx: 1 }} />
                  <Typography>Logout</Typography>
                </MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
