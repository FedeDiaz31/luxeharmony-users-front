import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionFooter() {
  return (
    <div className="bg-bgSecondaryColor">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>SHOP</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>SUPPORT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>OUR COMPANY</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
          <Typography>item</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
