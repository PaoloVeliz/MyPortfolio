import type { ReactElement } from 'react'
import Layout from '@/components/Layout/Layout'
// import type { NextPageWithLayout } from './_app'
import type { NextPageWithLayout } from '../_app'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Projects.module.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const inter = Inter({ subsets: ['latin'] })
const Page: NextPageWithLayout = () => {
  return (
    <>
    <div className={styles.main}>
      Projects I&apos;m proud of
      <AwesomeSlider className={styles.carrousel}>
    <div><ProjectCard tittle={"Bash shell course"} subtitle={"A bash console study made in spanish"} content={"I made this one this bash shell for practicing my scripting habilities"} url={"https://github.com/PaoloVeliz/shellCourse"}/></div>
    <div><ProjectCard tittle={"Industrial ecological print api"} subtitle={"This is a project made for hack the future contest"} content={"Made with php and laravel"} url={"https://github.com/PaoloVeliz/IndustrialEcologicalPrintApi"}/></div>
    <div><ProjectCard tittle={"background changer"} subtitle={"Another project made for practicing javascript"} content={"Made with javascript"} url={"https://github.com/PaoloVeliz/background_changer "}/></div>
    <div><ProjectCard tittle={"sorting json"} subtitle={"This one made for practicing python habilities"} content={"made with python"} url={"https://github.com/PaoloVeliz/sorting_jsons"}/></div>
  </AwesomeSlider>
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
