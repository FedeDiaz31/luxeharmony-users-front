import React from "react";
import { Link } from "react-router-dom";

import AccordionFooter from "../components/AccordionFooter";

const Footer = () => {
  return (
    <footer className="w-full bg-headerAndFooterColor text-white pt-10">
      <div className="container mx-auto">
        <div className="w-full">
          <AccordionFooter />
          <div className="hidden tablet:grid tablet:grid-cols-3 justify-between text-textPrimary leading-loose text-xs">
            <div className="py-4">
              <ul className="border-t-4 w-3/4">
                <li className="font-bold py-2 text-base">SHOP</li>
                <li>Electric Guitars</li>
                <li>Acoustic Guitars</li>
                <li>Basses</li>
                <li>Studio Monitors</li>
                <li>Studio Microphones</li>
                <li>Pre Amps</li>
              </ul>
            </div>
            <div className="py-4">
              <ul className="border-t-4 w-3/4">
                <li className="font-bold py-2 text-base">SUPPORT</li>
                <li>Customer Service</li>
                <li>Virtual Guitar Tech</li>
                <li>Warranty Registration & Info</li>
                <li>Repair and Restoration</li>
                <li>Report Counterfeits</li>
              </ul>
            </div>
            <div className="py-4">
              <ul className="border-t-4 w-3/4">
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
            </div>
            <div className="py-4"></div>
          </div>
          <div className="pb-4">
            <h4 className="text-textPrimary text-center text-sm pt-4">
              Customer Support (US & Uruguay):
            </h4>
            <h3 className="text-textPrimary text-center ">
              1-800-LUXE-HARMONY
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
