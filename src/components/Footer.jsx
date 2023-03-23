import React from "react";

import AccordionFooter from "../components/AccordionFooter";

const Footer = () => {
  return (
    <footer className="container-fluid bg-bgSecondaryColor text-white py-5">
      <div className="tablet:hidden">
        <AccordionFooter />
      </div>
      <h1 className="tablet:block hidden">Ok</h1>
    </footer>
  );
};

export default Footer;
