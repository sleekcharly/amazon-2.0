import { Step, StepLabel, Stepper } from "@material-ui/core";
import React from "react";
import useStyles from "../utils/styles";

export default function CheckoutWizard({ activeStep = 0 }) {
  const classes = useStyles();
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      className={classes.transparentBackground}
    >
      {["Login", "Shipping Address", "Payment Method", "Place Order"].map(
        step => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}
