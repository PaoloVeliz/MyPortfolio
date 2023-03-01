import { useState } from "react";
import { motion } from "framer-motion";
import "./Start.scss";
import { Hide } from "styled-icons/boxicons-regular";
// import {Whatsapp} from "@styled-icons/bootstrap";
import { Discord } from "@styled-icons/bootstrap";
import { Linkedin } from "@styled-icons/bootstrap";
import { Github } from "@styled-icons/bootstrap";
import { Whatsapp } from "@styled-icons/remix-fill";
import { Gitlab } from "@styled-icons/remix-fill";
import { Gmail } from "@styled-icons/boxicons-logos";
import { Instagram } from "@styled-icons/remix-fill";

function Start() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="Start">
      <div className="icon">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rectangle-icon"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          className="circle-icon"
        ></motion.div>
      </div>
      <motion.div style={{ overflowY: "hidden" }} className="center titles">
        <motion.span
          className="titles primary"
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          <span className="highlighted">Paolo</span> Giovanni Veliz Sulecio
        </motion.span>
      </motion.div>
      <div className="center titles">
        <span className="titles secondary">Systems engineer</span>
      </div>
      <div className="center social">
        <motion.a
          className="go-to"
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          href="discordapp.com/users/Paolo_vz#9827"
        >
          <Discord size="48" title="Discord" className="icon media" />
        </motion.a>
        <motion.a
          className="go-to"
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          href="https://www.linkedin.com/in/paolo-giovanni-veliz-sulecio-8b7b58225/"
        >
          <Linkedin size="48" title="Linked in" className="icon media" />
        </motion.a>
        <motion.a
          className="go-to"
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          href="https://github.com/PaoloVeliz"
        >
          <Github size="48" title="Github" className="icon media" />
        </motion.a>
        <motion.a
          className="go-to"
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          href="https://gitlab.com/PaoloVeliz"
        >
          <Gitlab size="48" title="GitLab" className="icon media" />
        </motion.a>
        <motion.a
          className="go-to"
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          href="https://www.instagram.com/paolo_vs1/"
        >
          <Instagram size="48" title="Gmail" className="icon media" />
        </motion.a>
        <motion.a
          className="go-to"
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}

          href="paoloveliz55@gmail.com"
          /// <reference path="" />
        >
          <Gmail size="48" title="Gmail" className="icon" />
        </motion.a>
      </div>
    </div>
  );
}

export default Start;
