import React from "react";

// brands
import epiphone from "../assets/img/footer-brands/logo-epiphone-white.svg";
import gibson from "../assets/img/footer-brands/logo-gibson-white.svg";
import kramer from "../assets/img/footer-brands/logo-kramer-white.svg";
import krk from "../assets/img/footer-brands/logo-krk-white.svg";
import maestro from "../assets/img/footer-brands/Maestro_primary_white.png";
import epiphosteinberger from "../assets/img/footer-brands/logo-steinberger-white.svg";

import AccordionFooter from "../components/AccordionFooter";

const Footer = () => {
  return (
    <footer className="w-full bg-textSecondary text-white pt-28">
      <div className="container mx-auto">
        <div className="w-full">
          <AccordionFooter />
          <div className="hidden tablet:grid tablet:grid-cols-4 justify-between text-textPrimary leading-loose text-xs">
            <div className="py-4">
              <ul className="border-t-4 w-3/4">
                <li className="font-bold py-2 text-base">SHOP</li>
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
            </div>
            <div className="py-4">
              <ul className="border-t-4 w-3/4">
                <li className="font-bold py-2 text-base">SUPPORT</li>
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
            </div>
            <div className="py-4">
              <ul className="border-t-4 w-3/4">
                <li className="font-bold py-2 text-base">OUR COMPANY</li>
                <li>Leadership</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>News</li>
                <li>Gibson TV</li>
                <li>Gibson Gives</li>
                <li>Gibson Generation Group</li>
              </ul>
            </div>
            <div className="py-4"></div>
          </div>
          <h4 className="text-textPrimary text-center text-sm pt-10 tablet:pb-16 pb-5">
            Customer Support (US & Uruguay):{" "}
            <strong> 1-800-LUXE-HARMONY</strong>
          </h4>
        </div>
      </div>
      <hr className="bg-bgPrimaryColor my-0 h-[2px] w-3/4 m-auto" />
      <div className="w-full bg-headerAndFooterColor pb-5 text-center">
        <h4 className="mx-auto text-base text-textPrimary font-semibold py-10">
          TEAM 5
        </h4>

        {/*         <div className="flex flex-wrap items-center justify-center gap-3 columns-4 my-4">
          <img src={epiphone} alt="Epiphone" />
          <img src={gibson} alt="Gibson" />

          <img src={kramer} alt="Kramer" />
          <img src={krk} alt="krk" />
          <img className="w-20" src={maestro} alt="Maestro" />
          <img src={epiphosteinberger} alt="Steinberger" />
        </div>
 */}
        <div className="container mx-auto">
          <div className="columns-1 justify-between flex gap-y-1 tablet:columns-2 flex-col tablet:flex-row">
            <div>
              <small className="text-textPrimary text-xs ps-2 ml-4 tablet:ml-0">
                Copyright 2023 Gibson Brands, Inc. All rights reserved.
              </small>
            </div>
            <div className="text-textPrimary text-xs ps-2 ml-4 tablet:ml-0">
              <span>Privacy Policy</span>
              <span> Terms& Conditions</span>
              <span>TradeMarks of Gibson Brands, Inc.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
