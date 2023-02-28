import { useState } from "react";
import "./NavBar.scss";
import { motion } from "framer-motion";
import { AccountCircle, Lock } from "@styled-icons/material";
import { BookInformation } from "@styled-icons/fluentui-system-filled";
import { CodeWorking } from "@styled-icons/ionicons-outline";
import { Education } from "@styled-icons/zondicons";
import { Notebook } from "@styled-icons/fluentui-system-filled";

function NavBar() {
  return (
    <div className="side-bar">
      <motion.div
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
        className="section"
      >
        <BookInformation
          size="48"
          title="General Information"
          className="icon"
        />
        {/* <span>General Information</span> */}
      </motion.div>
      <motion.div
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
        className="section"
      >
        <CodeWorking size="48" title="General Information" className="icon" />
        {/* <span>Projects</span> */}
      </motion.div>
      <motion.div
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
      className="section">
        <Education size="48" title="Education" className="icon" />
        {/* <span>Education</span> */}
      </motion.div>
      <motion.div 
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
      className="section">
        {/* <span>Professional Habilities</span> */}
        <AccountCircle
          size="48"
          title="Professional Habilities"
          className="icon"
          style={{
            maxHeight: "100%"
          }}
        />
      </motion.div>
      <motion.div 
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
      className="section">
        <Notebook size="48" title="Blog" className="icon" />
        {/* <span>Blog</span> */}
      </motion.div>
    </div>
  );
}

export default NavBar;
