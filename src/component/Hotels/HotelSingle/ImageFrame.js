import React from "react";
import "./style.css";

const ImageFrame = ({ photos }) => {
  return (
    <div className="image-grid">
      {photos?.map((url, index) => (
        <img key={index} src={url} alt="" />
      ))}
    </div>
  );
};

export default ImageFrame;

// import React from "react";
// import { Grid, Paper, Box } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const ImageFrame = ({ photos }) => {
//   if (photos) {
//     console.log(photos[0]);
//   }
//   return (
//     <div>
//       <Box
//         // style={{ display: "inline-block" }}
//         sx={{ flexGrow: 1, width: "600px", border: "1px solid black" }}
//       >
//         <Grid item xs={6} md={6}>
//           {photos && <img src={photos[0]} alt="" />}
//         </Grid>
//       </Box>
//       <Box
//         style={{ display: "inline-block" }}
//         sx={{ flexGrow: 1, width: "600px", border: "1px solid black" }}
//       >
//         <Grid container spacing={2}>
//           <Grid item xs={6} md={6}>
//             {photos && <img src={photos[1]} alt="" />}
//           </Grid>
//           <Grid item xs={6} md={6}>
//             {photos && <img src={photos[2]} alt="" />}
//           </Grid>
//           <Grid item xs={6} md={6}>
//             {photos && <img src={photos[3]} alt="" />}
//           </Grid>
//           <Grid item xs={6} md={6}>
//             {photos && <img src={photos[4]} alt="" />}
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default ImageFrame;
