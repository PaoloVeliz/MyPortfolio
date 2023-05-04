import type { ReactElement } from 'react'
import Layout from '@/components/Layout/Layout'
import type { NextPageWithLayout } from './_app'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Start.module.css'
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })
const Page: NextPageWithLayout = () => {
  return (
    <div className={styles.Start}>
       <div className={styles.icon}>
        {/* <motion.div
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
      </div> */}
      
      {/* <div className={`${styles.center} ${styles.social}`}>
        <motion.a
          className="go-to"
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          href="discordapp.com/users/Paolo_vz#9827"
        >
          <Discord size="48" title="Discord" className={`${styles.icon} ${styles.media}`} />
        </motion.a>
        <motion.a
          className={styles.goto}
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          href="https://www.linkedin.com/in/paolo-giovanni-veliz-sulecio-8b7b58225/"
        >
          <Linkedin size="48" title="Linked in" className={`${styles.icon} ${styles.media}`} />
        </motion.a>
        <motion.a
          className={styles.goto}
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          href="https://github.com/PaoloVeliz"
        >
          <Github size="48" title="Github" className={`${styles.icon} ${styles.media}`} />
        </motion.a>
        <motion.a
          className={styles.goto}
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          href="https://gitlab.com/PaoloVeliz"
        >
          <Gitlab size="48" title="GitLab" className={`${styles.icon} ${styles.media}`} />
        </motion.a>
        <motion.a
          className={styles.goto}
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          href="https://www.instagram.com/paolo_vs1/"
        >
          <Instagram size="48" title="Gmail" className={`${styles.icon} ${styles.media}`} />
        </motion.a>
        <motion.a
          className={styles.goto}
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          href="paoloveliz55@gmail.com"
          /// <reference path="" />
        >
          <Gmail size="48" title="Gmail" className={`${styles.icon}`} />
        </motion.a>
      </div> */}
    </div>
    <div className={styles.titles}>
    <div
        className={`${styles.center} ${styles.titlesprimary} ${styles.row} ${styles.secondary}`} style={{overflowY: "hidden"}}
      >
        <motion.div
          initial={{ translateY: "100%" }}
          transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
          className="highlighted"
        >
          P
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 1.1, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
          className={styles.highlighted}
        >
          a
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
          className={styles.highlighted}
        >
          o
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 1.3, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
          className={styles.highlighted}
        >
          l
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 1.4, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
          className={styles.highlighted}
          style={{ marginRight: "10px" }}
        >
          o
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          G
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 1.6, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          i
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 1.7, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          o
        </motion.div>

        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 1.8, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          v
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 1.9, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          a
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          n
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 2.1, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          n
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 2.2, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
          style={{ marginRight: "10px" }}
        >
          i
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 2.3, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          {" "}
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 2.4, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          V
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 2.5, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          e
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 2.6, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          l
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 2.7, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          i
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 2.8, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
          style={{ marginRight: "10px" }}
        >
          z
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 2.9, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          {" "}
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 3, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          S
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 3.1, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          u
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 3.2, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          l
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 3.3, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          e
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 3.4, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          c
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 3.5, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          i
        </motion.div>
        <motion.div
          initial={{
            translateY: "100%",
          }}
          transition={{ duration: 0.5, delay: 3.6, ease: "easeInOut" }}
          animate={{ translateY: "0%" }}
        >
          o
        </motion.div>
      </div>
      
      <div className={`${styles.center} ${styles.titlesprimary} ${styles.row} ${styles.secondary}`} style={{overflowY: "hidden"}} >
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 2.1, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        S
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 2.2, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        y
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 2.3, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        s
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 2.4, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        t
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 2.5, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        e
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 2.6, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        m
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 2.7, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        `&apos;`
        </motion.div>
        <motion.div
        style={{marginRight: "10px"}}
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 2.8, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        s
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 2.9, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        E
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 3, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        n
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 3.1, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        g
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 3.2, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        i
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 3.3, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        n
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 3.4, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        e
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 3.5, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        e
        </motion.div>
        <motion.div
        initial={{ translateY: "100%" }}
        transition={{ duration: 0.5, delay: 3.6, ease: "easeInOut" }}
        animate={{ translateY: "0%" }}
        >
        r
        </motion.div>
                                                                                
      </div>
    </div>
  </div>
  )
}


Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}  
    </Layout>
  )
}

export default Page
