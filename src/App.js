import React, { useState, useEffect } from "react";
import { Container, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./component/Form/RegisterForm";

import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Review from "./component/Review/Review";
import Hotel from "./component/Hotels/Hotel";
import HotelSingle from "./component/Hotels/HotelSingle/HotelSingle";
import MainPayment from "./component/Hotels/HotelSingle/PaymentSection/MainPayment";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<RegisterForm />} />
        <Route path="/blog" exact element={<Review />} />
        <Route path="/hotel" exact element={<Hotel />} />
        <Route path="/hotel/:id" exact element={<HotelSingle />} />
        <Route path="/hotel/paymentsection" exact element={<MainPayment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import React, { useEffect } from "react";
// import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
// import { useDispatch } from "react-redux";

// import { getPosts } from "./actions/posts";

// import Posts from "./component/Posts/Posts";
// import Form from "./component/Form/Form";
// import memories from "./images/memories.png";
// import useStyles from "./styles";

// const App = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [dispatch]);
//   return (
//     <Container maxWidth="lg">
//       <AppBar className={classes.appBar} position="static" color="inherit">
//         <Typography className={classes.heading} variant="h3" align="center">
//           Memories
//         </Typography>
//         <img
//           className={classes.image}
//           src={memories}
//           alt="memories"
//           height="60"
//         />
//       </AppBar>
//       <Grow in>
//         <Container>
//           <Grid
//             container
//             justify="space-between"
//             alignItems="stretch"
//             spacin="3"
//           >
//             <Grid item xs={12} sm={7}>
//               <Posts />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Form />
//             </Grid>
//           </Grid>
//         </Container>
//       </Grow>
//     </Container>
//   );
// };

// export default App;
