"use client";
import { useState, useRef } from "react";
import styles from "./Goto.module.css";
import { motion } from "framer-motion";
import { FaBeer } from "react-icons/fa";
import Link from "next/link";
type Props = {
  tittle: string;
  icon: React.ReactNode;
  color: string;
  direction: string;
};
const variants = {
  open: { opacity: 0, x: "-100%" },
  closed: { opacity: 0, x: "-100%" },
};
function Goto({ tittle, icon, color, direction }: Props) {
  const inputEl = useRef(direction).current;
  return (
    <motion.div 
    initial={{width: "100%"}}
    
    // whileTap={{width: "100vw",transition: {ease: "easeInOut"}}}
    className={styles.sidebar} 
    style={{ backgroundColor: color }}>
      <motion.div
        initial={{ y: "60%" }}
        whileHover={{
          y: 0,
          transition: { ease: "easeInOut" },
        }}
        className={styles.sidebar}
        style={{ backgroundColor: color }}
      >
        <div className={styles.icon}>
          <div className={styles.social}>{icon}</div>
        </div>


        <div className={styles.title}>
          <div className={styles.insidetext}>
            <Link href={direction} className={styles.insidetext}>
              {tittle}
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Goto;
