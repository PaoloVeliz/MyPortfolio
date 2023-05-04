"use client";
import { useState, useRef } from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";
import { FaBeer } from "react-icons/fa";
import Link from "next/link";
type Props = {
  tittle: string;
  subtitle: string;
//   icon: React.ReactNode;
Content: string;
//   direction: string;
};
const variants = {
  open: { opacity: 0, x: "-100%" },
  closed: { opacity: 0, x: "-100%" },
};

function Card({ tittle, Content, subtitle }: Props) {
  const [modal, setModal] = useState(false);
  const toggleModal=()=>{
    setModal(!modal)
  }
  return (
    <>
    <div className={styles.main}>
        <div className={styles.title}>
          <div style={{color: "black"}}>{tittle}</div>
          <div style={{color: "black"}}>{subtitle}</div> 
          </div>
        
        <div className={styles.buttons}>
            <button 
            onClick={toggleModal}
            className={styles.goto}>
                Read more
            </button>
        </div>
    </div>

{/* modal para ver el blog */}
  {modal && (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={toggleModal} ></div>
      <div className={styles.modalContent}>
        <h2 style={{color: "black"}}>{tittle}</h2>
        <h3 style={{color: "black"}}>{subtitle}</h3>
        <div style={{color: "black"}} className={styles.paragraph} ><p id="scroll">{Content}</p></div>
        <button className={styles.closeModal}
        onClick={toggleModal}
        >
          Close
        </button>
      </div>
    </div>
  )}
    

    </>
  );
}

export default Card;
