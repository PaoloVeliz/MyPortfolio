import { useState } from "react";
import { motion } from "framer-motion";
import "./Start.scss";
import { Hide } from "styled-icons/boxicons-regular";

function Start() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="Start">
      <div className="icon">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{duration:1}}
          animate={{ opacity: 1, scale: 1 }}
          className="rectangle-icon"
        ></motion.div>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5}}
        transition={{duration:1, delay:1}}
        animate={{ opacity: 1, scale: 1 }}
        className="circle-icon"></motion.div>
      </div>
      <motion.div

      style={{overflowY: "hidden"}}
      className="center titles">
        <motion.span className="titles primary"
        initial={{
          translateY: "100%"
        }}
        transition={{duration:0.7, delay:1, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        
        >
          <span className="highlighted">Paolo</span> Giovanni Veliz Sulecio
        </motion.span>
      </motion.div>
      <div className="center titles">
      <span className="titles secondary">Systems engineer</span>
      </div>

    </div>
  );
}

export default Start;
