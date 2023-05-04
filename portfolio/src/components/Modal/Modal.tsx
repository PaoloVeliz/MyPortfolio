"use client";
import { useState, useRef } from "react";
import styles from "./Modal.module.css";
import { motion } from "framer-motion";
import { FaBeer } from "react-icons/fa";
type Props = {
  tittle: string;
  Content: string;
};
function Modal({ tittle, Content }: Props) {
    const [modal, setModal] = useState(false);
//   const inputEl = useRef(direction).current;
  return (
    <div>

    </div>
  );
}

export default Modal;
