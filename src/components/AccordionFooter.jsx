import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function AccordionFooter() {
  return (
    <div className="bg-headerAndFooterColor tablet:hidden">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <li className="font-bold list-none">SHOP</li>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li className="font-bold py-2 text-base">SHOP</li>
            <li>Electric Guitars</li>
            <li>Acoustic Guitars</li>
            <li>Basses</li>
            <li>Studio Monitors</li>
            <li>Studio Microphones</li>
            <li>Pre Amps</li>
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
            <li className="font-bold py-2 text-base">SUPPORT</li>
            <li>Customer Service</li>
            <li>Virtual Guitar Tech</li>
            <li>Warranty Registration & Info</li>
            <li>Repair and Restoration</li>
            <li>Report Counterfeits</li>
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
            <li className="font-bold py-2 text-base">
              <Link to="/about">OUR DEVELOPMENT TEAM</Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/magguer/"
              >
                Martin Aguerre
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/juan-manuel-ottado/"
              >
                Juan Manuel Ottado
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/alan-torino/"
              >
                Alan Torino
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/federico-d%C3%ADaz-morel-810a73202/"
              >
                {" "}
                Federico Diaz
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ignacio-vidal-856627236/"
              >
                Ignacio Vidal
              </a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
