import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import FlagIcon from "@material-ui/icons/Flag";
import HomeIcon from "@material-ui/icons/Home";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from './StateProvider';


function Header() {

  const [{user}, dispatch] = useStateValue();


  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://i.pinimg.com/474x/38/9b/14/389b14861f4be0c8d84876b3dda9afc0.jpg"
          alt=""
        />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header_center">
        <div className="header_option header_option--active">
          <HomeIcon />
        </div>
        <div className="header_option">
          <FlagIcon />
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon />
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon />
        </div>

        <div className="header_option">
          <SupervisedUserCircleIcon />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar src = {user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
   