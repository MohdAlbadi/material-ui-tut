import { makeStyles } from "@material-ui/core";
import React from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { AddCircleOutlineOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import { format } from "date-fns";
const drawerWidth = 240;
const myStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100% ",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  active: {
    background: "#f4f4f4",
  },
  appbar: {
    width: "calc(100% - 240px)",
  },
  toolbar: {
    height: "100px",
  },
  date: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: 8,
  },
});

export default function Layout({ children }) {
  const classes = myStyles();
  const menuItems = [
    {
      text: "My notes ",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create ",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  const history = useHistory();
  const location = useLocation();
  return (
    <div className={classes.root}>
      {/* App Bar */}
      <AppBar className={classes.appbar} elevation={0} color="transparent">
        <Toolbar>
          <Typography className={classes.date}>
            {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Mohammed</Typography>
          <Avatar src="/img/Mohammed.jpg" className={classes.avatar} />
        </Toolbar>
      </AppBar>

      {/* Side draw */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5">Mohammed Notes </Typography>
        </div>

        {/* List and Links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              selected={location.pathname === item.path}
              onClick={() => history.push(item.path)}
              //   className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItem>
          ))}
        </List>
        {/* <List>
          <ListItem>
            <ListItemText primary="heelo"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="heelo"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="heelo"></ListItemText>
          </ListItem>
        </List> */}
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
