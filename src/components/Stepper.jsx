import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Shipping and Contact Info",
  "Shipping Options",
  "Payment Options",
];

export default function HorizontalLabelPositionBelowStepper({ step }) {
  return (
    <Box sx={{ width: "100%", marginTop: "18px", marginBottom: "18px" }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
