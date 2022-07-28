import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Container,
  Typography,
  Box,
  Avatar,
  Button,
} from "@material-ui/core";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logo from "../../images/logo-removebg-preview.png";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import * as actionType from "../../constants/actionTypes";

const pages = ["Home", "Hotel", "Blog"];
const width = window.innerWidth;

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);
  const [open, setOpen] = React.useState(false);
  // const [isAvadar, setIsAvadar] = useState();
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const handleClickaway = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleClickNavMenu = (page) => {
    console.log(page.toLowerCase());
    dispatch({ type: actionType.START_LOADING });
    navigate(`/${page.toLowerCase()}`);
    dispatch({ type: actionType.END_LOADING });
  };

  // console.log(user);

  // useEffect(() => {
  //   if (width < 600) {
  //     setIsAvadar((prevAvader) => !prevAvader);
  //     console.log(isAvadar);
  //   }
  // }, [width, location]);

  useEffect(() => {
    const token = user?.token;

    // JWT

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    // navigate("/");

    setUser(null);
  };

  const handleClick = () => {
    setOpenLogin(true);
  };

  // console.log(openLogin);

  return (
    <AppBar className={classes.appbar} position="sticky">
      <Container disableGutters maxWidth="xl" className={classes.container}>
        <div className={classes.navFirstPart}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
            // onClick={() => setOpenLogin(!openLogin)}
          >
            {/* <img component={Link} to="/" alt="icon" src={logo} height="45px" /> */}
            <img alt="icon" src={logo} height="45px" />
            <Typography
              className={classes.navFirstPart_typo}
              variant="h6"
              noWrap
              // href="/"
            >
              SKIPLAGGED
            </Typography>
          </Link>

          <Box>
            <Button className={classes.routeBtn} onClick={() => navigate("/")}>
              Home
            </Button>
            <Button
              className={classes.routeBtn}
              onClick={() => navigate("/hotel")}
            >
              Hotel
            </Button>
            <Button
              className={classes.routeBtn}
              onClick={() => navigate("/blog")}
            >
              Blog
            </Button>
          </Box>
        </div>

        <div className={classes.navSecondBtn}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar
                alt={user?.result.name}
                src={user?.result.imageUrl}
                className={classes.avatarForLargeDevice}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                  <Avatar
                    alt={user?.result.name}
                    src={user?.result.imageUrl}
                    onClick={handleClickaway}
                    className={classes.avatarForSmallDevice}
                  >
                    {user?.result.name.charAt(0)}
                  </Avatar>
                  {open ? (
                    <div
                      className={classes.deviceLogoutdiv}
                      style={{ textAlign: "center" }}
                    >
                      <Typography
                        style={{
                          color: "black",
                          fontFamily: "inherit",
                          marginLeft: ".5rem",
                          marginBottom: "0",
                          fontSize: "1rem",
                        }}
                        variant="h6"
                        paragraph
                      >
                        {user?.result.name}
                      </Typography>
                      <Button
                        component={Link}
                        to="/"
                        className={classes.logout}
                        style={{
                          textTransform: "none",
                          background: "darkred",
                        }}
                        variant="contained"
                        color="secondary"
                        onClick={logout}
                      >
                        Logout
                      </Button>
                    </div>
                  ) : null}
                </div>
              </ClickAwayListener>

              <Typography
                className={classes.userName}
                style={{
                  color: "black",
                  fontFamily: "inherit",
                  marginLeft: ".5rem",
                }}
                variant="h6"
              >
                {user?.result.name}
              </Typography>
              <Button
                component={Link}
                to="/"
                className={`${classes.logout} ${classes.logoutmain}`}
                style={{ textTransform: "none", background: "darkred" }}
                variant="contained"
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login" className={classes.brandContainer}>
                <AccountCircleIcon
                  className={classes.singinavader}
                  style={{ marginTop: "5px" }}
                />
              </Link>

              <span className={classes.singinbutton}>
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  style={{
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    background: "darkblue",
                    color: "white",
                  }}
                  onClick={handleClick}
                >
                  SignIn
                </Button>
              </span>
            </>
          )}
        </div>
      </Container>
    </AppBar>
  );
};

export default Navbar;
