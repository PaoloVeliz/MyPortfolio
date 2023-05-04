import type { ReactElement } from 'react'
import Layout from '@/components/Layout/Layout'
// import type { NextPageWithLayout } from './_app'
import type { NextPageWithLayout } from '../_app'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Habilities.module.css'
import ProgressBar from '@/components/ProgressBar/ProgressBar'

const inter = Inter({ subsets: ['latin'] })
const Page: NextPageWithLayout = () => {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.title} style={{color: "white"}}>
      Languages
      </div>
      <div className={styles.content} style={{ width: "100%"}}>
      <ProgressBar progress={"75%"} tittle={"Html/Css"}/>
      <ProgressBar progress={"60%"} tittle={"Javascript/Typescript"}/>
      <ProgressBar progress={"80%"} tittle={"Python"}/>
      <ProgressBar progress={"80%"} tittle={"PHP"}/>
      <ProgressBar progress={"80%"} tittle={"JAVA"}/>
      </div>
      <div className={styles.title} style={{color: "white"}}>
      Technologies
      </div>
      <div className={styles.content} style={{ width: "100%"}}>
      <ProgressBar progress={"70%"} tittle={"Laravel"}/>
      <ProgressBar progress={"60%"} tittle={"Djando"}/>
      <ProgressBar progress={"60%"} tittle={"Flask"}/>
      <ProgressBar progress={"50%"} tittle={"Tailwindcss"}/>
      <ProgressBar progress={"60%"} tittle={"Bootstrap"}/>
      <ProgressBar progress={"70%"} tittle={"Vuejs"}/>
      <ProgressBar progress={"60%"} tittle={"Reactjs"}/>
      <ProgressBar progress={"70%"} tittle={"Git"}/>
      </div>
      
    </div>
  </>
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
