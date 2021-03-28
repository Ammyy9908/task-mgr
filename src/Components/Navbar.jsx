import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "./Avatar/Avatar";
import { IconButton } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  let logo = "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg";
  const [isDark, setDark] = React.useState(false);

  const handleLightTheme = () => {
    setDark(false);
    const body = document.body;
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  };

  const handleDarkTheme = () => {
    setDark(true);
    const body = document.body;
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  };
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__brand">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <span>Task Manager</span>
        </div>
        <div className="navbar__right">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton onClick={isDark ? handleLightTheme : handleDarkTheme}>
            {isDark ? <Brightness4Icon /> : <WbSunnyIcon />}
          </IconButton>
          <Avatar color="link" size="small">
            S
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
