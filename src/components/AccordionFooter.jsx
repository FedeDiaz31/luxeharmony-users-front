import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionFooter() {
  return (
    <div className="bg-bgSecondaryColor tablet:hidden">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <li className="font-bold list-none  ">SHOP</li>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Les Paul Models</li>
            <li>SG Models</li>
            <li>ES Models</li>
            <li>Basses</li>
            <li>Designer Models</li>
            <li>Gibson Custom Shop</li>
            <li>Super Jumbo Models</li>
            <li>Square Shoulder Models</li>
            <li>Small Body Models</li>
            <li>Songwritter Models</li>
            <li>Accesories</li>
            <li>Hardware</li>
            <li>Merchandise</li>
            <li> </li>
            <li>The Gibson Garage</li>
            <li>Find A Dealer Near You</li>
            <li>Online Dealers</li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <li className="font-bold list-none">SUPPORT</li>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Customer Service</li>
            <li>Virtual Guitar Tech</li>
            <li>Warranty Registration & Info</li>
            <li>Repair and Restoration</li>
            <li>Report Counterfeits</li>
            <li>Serial Number FAQ</li>
            <li>Online Store Policies & FAQ</li>
            <li>Promotional Terms and Conditions</li>
            <li>Gibson Garage Store Pilicies</li>
            <li>Gibson Guitar Specs (2015 - 2019)</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <li className="font-bold list-none">OUR COMPANY</li>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Leadership</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>News</li>
            <li>Gibson TV</li>
            <li>Gibson Gives</li>
            <li>Gibson Generation Group</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
