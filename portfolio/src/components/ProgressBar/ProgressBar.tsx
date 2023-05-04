"use client";
import { useState, useRef } from "react";
import styles from "./ProgressBar.module.css";
import { motion } from "framer-motion";
import { FaBeer } from "react-icons/fa";
import Link from "next/link";
type Props = {
  progress: string;
  tittle: string;
};
const variants = {
  open: { opacity: 0, x: "-100%" },
  closed: { opacity: 0, x: "-100%" },
};
function ProgressBar({ progress, tittle }: Props) {
//   const inputEl = useRef(direction).current;
  return (
    // <motion.div 
    // // initial={{width: "65px"}}
    
    // // // whileTap={{width: "100vw",transition: {ease: "easeInOut"}}}
    // className={styles.skillBar} 
    // // style={{ backgroundColor: "red" }}
    // >
    //     <span className={styles.skillCount2}>85%</span>
    // </motion.div>
    //


    <div className={styles.skill}>
    <div className={styles.titlesPrimary} style={{marginBottom: "10px"}}>
<div style={{ color: "white",fontSize: "40px"}}>{tittle}</div>
<div style={{ marginLeft: "82%", fontSize: "30px", color: "white"}}>{progress}</div>
    </div>
<div className={`${styles.skillBlock}`}>
<div className={styles.skillContent} style={{width: progress}}></div>
</div>
</div>
  );
}

export default ProgressBar;
