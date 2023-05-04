// import { useState } from "react";
import style from "./Navbar.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Goto from "../GoTo/Goto";

function NavBar() {
  const links = [
  {label:'Home', route: '/'},
  {label:'General Information', route: '/GeneralInformation'},
  {label: 'About', route: '/Habilities'},
  {label: 'Projects', route: '/Projects'},
  {label: 'Blog', route: '/Blog'},
]
  return (
    <div className={style.main}>
      {
          links.map(({label, route}) => (
            <Link href={route} className={style.link} key={label}>
              {label}
            </Link>
          ))
      }
    </div>
  );
}

export default NavBar;
