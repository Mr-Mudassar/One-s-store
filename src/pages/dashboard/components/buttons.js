import { motion } from "framer-motion";
import React from "react";

const Buttons = () => {
  return (
    <div className="flex justify-between gap-2">
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="bg-theme-btnBg p-2 rounded-md text-theme-btnColor text-sm font-semibold hover:bg-theme-btnColorHover shadow-lg"
      >
        Order now
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="bg-gray-200 p-2 rounded-md text-sm font-semibold text-theme-tertiary shadow-lg hover:bg-slate-300"
      >
        View Product
      </motion.button>
    </div>
  );
};

export default Buttons;
