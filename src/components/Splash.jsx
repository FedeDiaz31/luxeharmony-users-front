import { duration } from "@mui/material";
import { motion } from "framer-motion";
import { initial } from "lodash";
import React from "react";
import logo from "../assets/img/logoWhite.png";

function Splash() {
  return (
    <motion.div
    initial={{ opacity: 1 }}
        animate={{ opacity: 0}}
        transition={{delay:3}}
    className="splash">
      <motion.img
        initial={{ scale: 2 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 70,
        }}
        className="splash-logo"
        src={logo}
        alt=""
      />
    </motion.div>
  );
}

export default Splash;
