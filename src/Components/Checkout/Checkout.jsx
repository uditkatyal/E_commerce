import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";
const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Shipping address", "Payment details"];
  const Confirmation = () => (
    <>
      <Button component={Link} variant="outlined" type="button" to="/">
        Back to home
      </Button>
    </>
  );
  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  return (
    <div>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </div>
  );
};

export default Checkout;
