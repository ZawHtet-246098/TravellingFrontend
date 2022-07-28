import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./Style";

import RestaurantIcon from "@material-ui/icons/Restaurant";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import WorkIcon from "@material-ui/icons/Work";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import CheckIcon from "@material-ui/icons/Check";
import AccessibleIcon from "@material-ui/icons/Accessible";
import LanguageIcon from "@material-ui/icons/Language";

const Properties = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2} className={classes.hotelProperties}>
        <Grid item xs={12} md={3}>
          <Typography className={classes.hotelPropertiesTitle} variant="h5">
            Property amenities
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div>
                {firstPropertyAmenity.map((item, index) => (
                  <div className={classes.singleProperty}>
                    <Typography
                      className={classes.singlePropertyTitle}
                      variant="h6"
                      paragraph
                    >
                      {(item.name === "Food and drink" && (
                        <RestaurantIcon
                          className={classes.singlePropertyIcon}
                        />
                      )) ||
                        (item.name === "Taking the kids" && (
                          <ChildCareIcon
                            className={classes.singlePropertyIcon}
                          />
                        )) ||
                        (item.name === "What to do" && (
                          <LocalActivityIcon
                            className={classes.singlePropertyIcon}
                          />
                        )) ||
                        (item.name === "Working away" && (
                          <WorkIcon className={classes.singlePropertyIcon} />
                        )) ||
                        (item.name === "Services" && (
                          <RoomServiceIcon
                            className={classes.singlePropertyIcon}
                          />
                        ))}

                      {item.name}
                    </Typography>
                    {item.properties.map((item, index) => (
                      <Typography
                        variant="h6"
                        paragraph
                        className={classes.detailProperty}
                      >
                        {item}
                      </Typography>
                    ))}
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>
                {secondPropertyAmenity.map((item, index) => (
                  <div className={classes.singleProperty}>
                    <Typography
                      variant="h6"
                      paragraph
                      className={classes.singlePropertyTitle}
                    >
                      {(item.name === "Facilities" && (
                        <CheckIcon className={classes.singlePropertyIcon} />
                      )) ||
                        (item.name === "Accessibility" && (
                          <AccessibleIcon
                            className={classes.singlePropertyIcon}
                          />
                        )) ||
                        (item.name === "Languages" && (
                          <LanguageIcon
                            className={classes.singlePropertyIcon}
                          />
                        ))}
                      {item.name}
                    </Typography>
                    {item.properties.map((item, index) => (
                      <Typography
                        variant="h6"
                        paragraph
                        className={classes.detailProperty}
                      >
                        {item}
                      </Typography>
                    ))}
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.hotelProperties}>
        <Grid item xs={12} md={4}>
          <Typography className={classes.hotelPropertiesTitle} variant="h5">
            Cleaning and safety practices
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          {cleningAndSafety.map((item, index) => (
            <div className={classes.singleProperty}>
              <Typography
                variant="h6"
                paragraph
                className={classes.singlePropertyTitle}
              >
                {(item.name === "Enhanced cleanliness measures" && (
                  <CheckIcon className={classes.singlePropertyIcon} />
                )) ||
                  (item.name === "Social distancing" && (
                    <CheckIcon className={classes.singlePropertyIcon} />
                  )) ||
                  (item.name === "Safety measures" && (
                    <CheckIcon className={classes.singlePropertyIcon} />
                  ))}
                {item.name}
              </Typography>
              {item.properties.map((item, index) => (
                <Typography
                  variant="h6"
                  paragraph
                  className={classes.detailProperty}
                >
                  {item}
                </Typography>
              ))}
            </div>
          ))}
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.hotelProperties}>
        <Grid item xs={12} md={3}>
          <Typography className={classes.hotelPropertiesTitle} variant="h5">
            Room amenities
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div>
                {firstRoomAmenties.map((item, index) => (
                  <div className={classes.singleProperty}>
                    <Typography
                      className={classes.singlePropertyTitle}
                      variant="h6"
                      paragraph
                    >
                      <CheckIcon className={classes.singlePropertyIcon} />
                      {item.name}
                    </Typography>
                    {item.properties.map((item, index) => (
                      <Typography
                        variant="h6"
                        paragraph
                        className={classes.detailProperty}
                      >
                        {item}
                      </Typography>
                    ))}
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div>
                {secondRoomAmenties.map((item, index) => (
                  <div className={classes.singleProperty}>
                    <Typography
                      variant="h6"
                      paragraph
                      className={classes.singlePropertyTitle}
                    >
                      <CheckIcon className={classes.singlePropertyIcon} />
                      {item.name}
                    </Typography>
                    {item.properties.map((item, index) => (
                      <Typography
                        variant="h6"
                        paragraph
                        className={classes.detailProperty}
                      >
                        {item}
                      </Typography>
                    ))}
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Properties;

const firstPropertyAmenity = [
  {
    name: "Food and drink",
    properties: [
      "Buffet breakfast (surcharge) each morning 6 AM–10 AM",
      "3 restaurants",
      "Bar/lounge",
      "Coffee shop",
      "Coffee/tea in a common area",
      "24-hour room service",
    ],
  },
  {
    name: "Taking the kids",
    properties: ["Free local shuttle"],
  },
  {
    name: "What to do",
    properties: ["Fitness classes", "Yoga classes", "Golfing nearby"],
  },
  {
    name: "Working away",
    properties: [
      "Business center",
      "Meeting rooms",
      "Conference center (1822 square feet of space)",
    ],
  },
  {
    name: "Services",
    properties: [
      "24-hour front desk",
      "Concierge services",
      "Tour/ticket assistance",
      "Limo or town car service",
      "Dry cleaning/laundry services",
      "Hair salon",
      "Free newspapers in lobby",
      "Luggage storage",
      "Wedding services",
      "Multilingual staff",
      "Porter/bellhop",
    ],
  },
];

const secondPropertyAmenity = [
  {
    name: "Facilities",
    properties: [
      "Built in 2010",
      "ATM/banking",
      "Safe-deposit box at front desk",
      "Terrace",
      "Piano",
      "Fitness center",
      "An indoor pool",
      "Full-service spa",
      "Sauna",
      "Massage/treatment rooms",
    ],
  },
  {
    name: "Accessibility",
    properties: [
      "Wheelchair accessible",
      "Braille/raised signage",
      "Elevator",
      "Accessible bathroom",
      "In-room accessibility",
      "Roll-in shower",
      "Wheelchair-accessible path of travel",
      "Wheelchair-accessible parking",
      "Wheelchair-accessible registration desk",
      "Wheelchair-accessible pool",
      "Wheelchair-accessible fitness center",
      "Wheelchair-accessible business center",
      "Lowered electrical outlets in bathroom",
      "Height-adjustable showerhead",
      "Grab bar near toilet",
      "Transfer shower",
    ],
  },
  {
    name: "Languages",
    properties: ["Chinese (Mandarin)", "English", "Japanese"],
  },
];

const cleningAndSafety = [
  {
    name: "Enhanced cleanliness measures",
    properties: [
      "Disinfectant is used to clean the property",
      "Follows standard cleaning and disinfection practices of Commitment to Clean (Marriott)",
    ],
  },
  {
    name: "Social distancing",
    properties: ["Social distancing measures in place"],
  },
  {
    name: "Safety measures",
    properties: ["Hand sanitizer provided"],
  },
];
const firstRoomAmenties = [
  {
    name: "Be entertained",
    properties: [
      "IPod docking station",
      "42-inch LCD TV",
      "Satellite TV channels",
    ],
  },
  {
    name: "Home comfort",
    properties: [
      "Air conditioning (climate-controlled)",
      "Minibar",
      "Coffee/tea maker",
      "Bathrobes and slippers",
      "Iron/ironing board",
    ],
  },
  {
    name: "Sleep well",
    properties: [
      "Hypo-allergenic bedding",
      "Blackout drapes/curtains",
      "Turndown service",
      "Memory foam mattress",
      "Free crib/infant bed",
      "Rollaway/extra bed (surcharge)",
      "Bed sheets provided",
    ],
  },
];

const secondRoomAmenties = [
  {
    name: "What to enjoy",
    properties: ["In-room massage"],
  },
  {
    name: "Freshen up",
    properties: [
      "Partially open bathroom",
      "Deep soaking bathtub",
      "Separate bathtub and shower",
      "Rainfall showerhead",
      "Designer toiletries",
      "Hair dryer",
    ],
  },
  {
    name: "Stay connected",
    properties: ["Desk", "Free WiFi and wired Internet", "Phone"],
  },
  {
    name: "Food and drink",
    properties: ["Refrigerator", "Free bottled water"],
  },
  {
    name: "More",
    properties: ["Daily housekeeping", "In-room safe (laptop compatible)"],
  },
];
