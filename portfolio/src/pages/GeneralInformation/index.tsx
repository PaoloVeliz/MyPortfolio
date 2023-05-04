import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./GeneralInformation.module.css";
import Link from "next/link";
import type { ReactElement } from "react";
import Layout from "@/components/Layout/Layout";
import type { NextPageWithLayout } from "../_app";
import { Inter } from "next/font/google";
import { AiFillGithub, AiFillGitlab, AiFillLinkedin } from "react-icons/ai";
const inter = Inter({ subsets: ["latin"] });
const micararoute = "/public/assets/micara.jpeg";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <div className={styles.generalinfo}>
        <div className={styles.cards}>
          <div className={styles.second}>
            <div className={styles.card} style={{ overflowY: "hidden" }}>
              <div
                className={styles.cardTittle}
                style={{ overflowY: "hidden", paddingBottom: "50px" }}
              >
                <motion.span
                  initial={{
                    translateY: "100%",
                  }}
                  transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
                  animate={{ translateY: "0%" }}
                >
                  {" "}
                  Who am I
                </motion.span>
              </div>
              <motion.div
                style={{
                  overflowY: "hidden",
                  minHeight: "900px",
                  height: "900px",
                  paddingTop: "30px",
                  paddingBottom: "100px",
                }}
                className={styles.cardBody}
                initial={{
                  translateY: "100%",
                }}
                transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
                animate={{ translateY: "0%" }}
              >
                Hi! My name is <strong>Paolo Giovanni Veliz Sulecio</strong> and
                I am <strong>22 years old</strong>, I&apos;m glad that you are taking
                time of your day reading and watching mi portfolio, I&apos;m studying{" "}
                <strong>Computer System&apos;s Enginner</strong> at Universidad
                Rafael Landivar. <strong>I&apos;m from Guatemala</strong> and my
                native language is Spanish.
              </motion.div>
            </div>
          </div>
          <div
            className={styles.second}
            style={{ overflowY: "hidden", paddingTop: "50px" }}
          >
            <motion.div
              className={`${styles.card} ${styles.cardImage}`}
              initial={{
                translateY: "100%",
              }}
              transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
              animate={{ translateY: "0%" }}
            >
              <Image
                src={"/assets/micara.jpeg"}
                style={{ borderRadius: "50%" }}
                alt="profile-photo"
                width={"200"}
                height={"200"}
              />
            </motion.div>
          </div>
          <div className={styles.second}>
            <div
              className={styles.card}
              style={{ height: "1100px", overflowY: "hidden" }}
            >
              <motion.div
                className={styles.cardTittle}
                style={{ overflowY: "hidden" }}
              >
                <motion.span
                  initial={{
                    translateY: "100%",
                  }}
                  transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
                  animate={{ translateY: "0%" }}
                >
                  Professional Experience
                </motion.span>
              </motion.div>
              <motion.div
                className={styles.cardBody}
                initial={{
                  translateY: "100%",
                }}
                transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
                animate={{ translateY: "0%" }}
              >
                <ul>
                  <li>
                    Exum Guate
                    <ul>
                      <li>Jan 2021 - Jan 2022</li>
                      <li>
                        I worked here as a <strong>fullstack developer</strong>,
                        creating project with <strong>laravel</strong>,{" "}
                        <strong>php</strong> and <strong>vuejs</strong>
                      </li>
                      <li>
                        Also I worked with <strong>Docker</strong>, docker
                        compose, larasail and <strong>Digital Ocean</strong>
                      </li>
                    </ul>
                  </li>
                  <li>DeltaTracking</li>
                  <ul>
                    <li>June 2022 - December 2022</li>
                    <li>
                      I worked here as a <strong>Backend Developer</strong>,
                      migrating parts from
                      <strong>python</strong> to <strong>java</strong> using{" "}
                      <strong>maven</strong>, <strong>django</strong>
                    </li>
                    <li>
                      Also I worked with{" "}
                      <strong> aws instances and buckets</strong>
                    </li>
                  </ul>
                </ul>
              </motion.div>
              <motion.div
                className={styles.cardTittle}
                style={{ overflowY: "hidden", paddingTop: "10px" }}
              >
                <motion.span
                  initial={{
                    translateY: "100%",
                  }}
                  transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
                  animate={{ translateY: "0%" }}
                >
                  You can talk to me by
                </motion.span>
              </motion.div>
              <motion.div
                className={styles.cardBodyRow}
                initial={{
                  translateY: "100%",
                }}
                transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
                animate={{ translateY: "0%" }}
              >
                <motion.div
                  className={styles.icons}
                  initial={{
                    translateY: "100%",
                  }}
                  transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
                  animate={{ translateY: "0%" }}
                >
                  <Link href="https://github.com/PaoloVeliz">
                  <AiFillGithub size={70} color={"white"}/>
                  </Link>
                  
                </motion.div>
                <motion.div
                  className={styles.icons}
                  initial={{
                    translateY: "100%",
                  }}
                  transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
                  animate={{ translateY: "0%" }}
                >
                  
                  <Link href="https://gitlab.com/PaoloVeliz">
                  <AiFillGitlab size={70} color={"white"} />
                  </Link>
                  
                </motion.div>
                <motion.div
                  className={styles.icons}
                  initial={{
                    translateY: "100%",
                  }}
                  transition={{ duration: 0.7, delay: 1, ease: "easeInOut" }}
                  animate={{ translateY: "0%" }}
                >
                  <Link href="https://www.linkedin.com/in/paolo-giovanni-veliz-sulecio-8b7b58225/">
                  <AiFillLinkedin size={70} color={"white"} />
                  </Link>
                  
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
