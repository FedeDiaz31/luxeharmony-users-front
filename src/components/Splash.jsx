import { motion } from "framer-motion";
import React from "react";

function Splash() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3 }}
      className="splash"
    >
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 70,
        }}
        className="splash-logo"
        src="LOGO-WHITE-LUXE-HARMONY2.png"
        alt=""
      />
    </motion.div>
  );
}

export default Splash;
