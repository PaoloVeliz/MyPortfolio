import { Inter } from "next/font/google";
import styles from "./Layout.module.css";
import Goto from "../GoTo/Goto";
import { useState } from "react";
import { IconContext } from "react-icons";
import { ImPen } from "react-icons/im";
import { motion } from "framer-motion";
import {
  BsFillBrightnessHighFill,
  BsExclamationSquareFill,
} from "react-icons/bs";
import React, { PropsWithChildren, ReactComponentElement } from "react";
import { AiFillCode } from "react-icons/ai";
const inter = Inter({ subsets: ["latin"] });

function logo(icon: React.ReactNode, pixels: string) {
  return (
    <IconContext.Provider value={{ color: "#FFFCF2", size: pixels }}>
      <div>{icon}</div>
    </IconContext.Provider>
  );
}

export default function Layout({ children }: PropsWithChildren) {
  const [change, setChange] = useState(false);
  const [position, setPosition] = useState(false);
  const [change1, setChange1] = useState(false);
  const [position1, setPosition1] = useState(false);
  const [change2, setChange2] = useState(false);
  const [position2, setPosition2] = useState(false);
  const [change3, setChange3] = useState(false);
  const [position3, setPosition3] = useState(false);
  function Animation(goto: number) {
	switch(goto){
	case 0:
	setChange(true)
  setTimeout(() => {
    setChange(false)
    setPosition(true)
  }, 2000);
	break;
  case 1:
	setChange1(true)
  setTimeout(() => {
    setChange1(false)
    setPosition1(true)
  }, 2000);
	break;
  case 2:
	setChange2(true)
  setTimeout(() => {
    setChange2(false)
    setPosition2(true)
  }, 2000);
	break;
  case 3:
	setChange3(true)
  setTimeout(() => {
    setChange3(false)
    setPosition3(true)
  }, 2000);
	break;
	}
  }
  
  return (
    <div className={styles.body}>
      <div className={styles.navbar}>
        <motion.div style={{ overflowY: "hidden",overflowX: "hidden", width: change ? "100vw" : "60px", position: "fixed", left: position ? "97%" : "0" , right: "0",height: "100%", zIndex: "3000",display: "flex", alignItems: "center", justifyContent: "center"}}
        className={styles.goto}
        onClick={() => Animation(0)}
        >
          <Goto
            tittle={"Blog"}
            icon={logo(<ImPen />, "40px")}
            color={"#403D39"}
            direction={"/Blog"}
          />
        </motion.div>
        <div style={{ overflowY: "hidden", overflowX: "hidden", width: change1 ? "100vw" : "60px", position: "fixed", left: position1 ? "94%" : "3.04%" ,right: "15%", height: "100%", zIndex: "3000",}}
        className={styles.goto}
        onClick={() => Animation(1)}
        >
          <Goto
            tittle={"Habilities"}
            icon={logo(<BsFillBrightnessHighFill />, "40px")}
            color={"#99582A"}
            direction={"/Habilities"}
          />
        </div>
        <div style={{ overflowY: "hidden",overflowX: "hidden", width: change2 ? "100vw" : "60px", position: "fixed", left: position2 ? "91%" : "6%",height: "100%", zIndex: "3000",}}
        className={styles.goto}
        onClick={() => Animation(2)}>
          <Goto
            tittle={"Projects"}
            icon={logo(<AiFillCode />, "40px")}
            color={"#BB9457"}
            direction={"/Projects"}
          />
        </div>
        <div
          style={{ overflowY: "hidden",overflowX: "hidden", width: change3 ? "100vw" : "60px", position: "fixed", left: position3 ? "88%" : "9%" , height: "100%", zIndex: "3000",}}
          className={styles.goto}
        onClick={() => Animation(3)}
        >
          <Goto
            tittle={"About  me"}
            icon={logo(<BsExclamationSquareFill />, "40px")}
            color={"#6F1D1B"}
            direction={"/GeneralInformation"}
          />
        </div>
      </div>
      <main className={styles.children}>{children}</main>
    </div>
  );
}
