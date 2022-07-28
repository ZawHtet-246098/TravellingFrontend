import React from "react";
import { Typography, Button } from "@material-ui/core";
import useStyles from "./style";
import { Link } from "react-router-dom";

import CloseIcon from "@material-ui/icons/Close";

const PaymentModel = ({ setOpen, open, totalPrice, startDate }) => {
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const classes = useStyles();
  return (
    <div className={classes.paymentParent}>
      <div className={classes.patmentTitle}>
        <Typography style={{ fontWeight: "bold" }}>
          Your payment options
        </Typography>
        <CloseIcon
          style={{ color: "darkred" }}
          onClick={() => setOpen(!open)}
        />
      </div>
      <hr />
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://a.travel-assets.com/travel-assets-manager/03052020/illustration__free__cancellation__sml.svg"
          alt=""
          style={{ width: "60px", height: "70px" }}
        />
        <div>
          <Typography style={{ fontWeight: "bold" }}>
            Fully refundable before {month} {date.getDate() + 1},
            {date.getFullYear()}
          </Typography>
          <Typography>
            You can change or cancel this stay if plans change. Because
            flexibility matters.
          </Typography>
        </div>
      </div>
      <div>
        <Typography style={{ fontWeight: "bold" }}>Pay now</Typography>
        <ul style={{ paddingLeft: "1rem" }}>
          <li>We will process your payment in your local currency</li>
          <li>More ways to pay: use debit/credit card</li>
          <li>You can use a valid Hotels.com coupon</li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Typography style={{ fontWeight: "bold" }}>
            Hotels.com®️ Rewards
          </Typography>
          <ul style={{ paddingLeft: "1rem" }}>
            <li>Collect</li>
            <li>Redeem</li>
          </ul>
        </div>
        <div style={{ textAlign: "center" }}>
          <Typography style={{ fontWeight: "bold" }}>
            USD {totalPrice}
          </Typography>
          <Button
            style={{
              textTransform: "none",
              //   border: "1px solid darkblue",
              background: "darkblue",
              color: "white",
              padding: ".2rem 1rem",
            }}
          >
            <Link
              to="/hotel/paymentsection"
              style={{ textDecoration: "none", color: "white" }}
            >
              Pay now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModel;
