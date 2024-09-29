import { React, useState } from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import img from "../../image/Logo2.png";
import { Link,NavLink } from "react-router-dom";
import "../../Styles/HeaderStyles.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobileOpen, setmobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setmobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onclick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{ flexGrow: 1 ,my:2}}>
        <img src={img} alt="" width={120} />
      </Typography>

  <Divider/>
        <ul className="mobile-navigation">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/menu"}>Menu</Link>
          </li>
        </ul>
      </Box>
    
  );

  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "rgb(237, 229, 229)" }}>
          <Toolbar>
            <IconButton
              color="black"
              aria-lable="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography sx={{ flexGrow: 1 }}>
              <img src={img} alt="" width={120} />
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink >
                </li>
                <li>
                  <NavLink  to={"/about"}>About</NavLink >
                </li>
                <li>
                  <NavLink  to={"/contact"}>Contact</NavLink >
                </li>
                <li>
                  <NavLink  to={"/menu"}>Menu</NavLink >
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box className="nav">
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'},'&.MuiDrawer-paper':{boxSizing:'border-box',width:"240px"}}}>
            {drawer}
          </Drawer>

        </Box>
<Box  sx={{p:2}}>
<Toolbar/>
</Box>
       
      </Box>
    </div>
  );
};

export default Header;
