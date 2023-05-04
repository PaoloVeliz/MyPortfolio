"use client";
import { useState, useRef } from "react";
import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";
import { FaBeer } from "react-icons/fa";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import Link from "next/link";
type Props = {
  tittle: string;
  content: string;
  subtitle: string;
  url: string;

};
const variants = {
  open: { opacity: 0, x: "-100%" },
  closed: { opacity: 0, x: "-100%" },
};
function ProjectCard({ content, tittle, subtitle, url }: Props) {
//   const inputEl = useRef(direction).current;
  return (
    <div className={styles.main}>
      
      <div className={styles.tittle}>{tittle}</div>
      <div className={styles.subTitle}>{subtitle}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.linkpart}>
      Go to see my code
        <Link href={url} className={styles.link}>
          
          <BsFillArrowRightSquareFill size={60} color={"white"}/>
        </Link>
	{/* <a href={url} alt={"A link to my social media"}> Go to</a> */}
      </div>
    </div>
  );
}

export default ProjectCard;
