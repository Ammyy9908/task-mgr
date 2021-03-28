import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  let logo = "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg";
  const [{ sidebar }, dispatch] = useStateValue();

  const handleSidebarDisable = (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains("sidebar__dropshadow")) {
      dispatch({
        type: "SET_SIDEBAR",
        sidebar: !sidebar,
      });
    }
  };
  return (
    <div
      className={`sidebar__dropshadow ${sidebar && "sidebar__enabled"}`}
      onClick={handleSidebarDisable}
    >
      <div className="sidebar">
        <div className="sidebar__header">
          <div className="sidebar__header__wrapper">
            {/* <img src={logo} alt="Brand Logo" /> */}
            <span>Task Manager</span>
          </div>
        </div>
        <div className="sidebar__search__section">
          <div className="searchbar__sidebar">
            <SearchIcon />
            <input type="text" name="key" id="key" placeholder="Search" />
          </div>
        </div>
        <div className="sidebar__links">
          <a href="/">All Tasks</a>
          <a href="/">Completed</a>
          <a href="/">Settings</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
