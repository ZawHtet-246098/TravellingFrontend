import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import useStyle from "./styles";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const SingleQuestion = ({ item }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <Grid item xs={10} md={6}>
      <ClickAwayListener onClickAway={handleClickAway}>
        {/* <h1>{item.title}</h1> */}
        <Box className={classes.singlebox}>
          <button
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              border: "none",
              padding: ".5rem",
            }}
            type="button"
            onClick={handleClick}
          >
            {item.title}
            <KeyboardArrowDownIcon />
          </button>
          {open ? <Box>{item.answer}</Box> : null}
        </Box>
      </ClickAwayListener>
    </Grid>
  );
};

export default SingleQuestion;
