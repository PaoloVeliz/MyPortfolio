import { useState } from "react";
import { motion } from "framer-motion";
import "./GeneralInformation.scss";

function GeneralInformation() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="general-info">
      <div className="cards">
        <div className="second">
          <div className="card">
            <div className="card-tittle">Who am I</div>
            <div className="card-body">
              Hi! My name is{" "}
              <strong>
                Paolo Giovanni Veliz Sulecio
              </strong>{" "}
              and I am <strong >22 years old</strong>, I'm
              glad that you are taking time of your day reading and watching mi
              portfolio, I'm studying{" "}
              <strong >Computer System's Enginner</strong>{" "}
              at Universidad Rafael Landivar.{" "}
              <strong >I'm from Guatemala</strong> and my
              native language is Spanish.
            </div>
          </div>
        </div>
        <div className="second">
        <div className="card card-image">
            <img
              className="profile-photo"
              src="/src/assets/micaraprimerodios.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="second">
          <div className="card">
            <div className="card-tittle">Professional Experience</div>
            <div className="card-body">
              <ul>
                <li>
                  Exum Guate
                  <ul>
                    <li>Jan 2021 - Jan 2022</li>
                    <li>
                      I worked here as a <strong>fullstack developer</strong>, creating project
                      with <strong>laravel</strong>, <strong>php</strong> and <strong>vuejs</strong>
                    </li>
                    <li>
                    Also I worked with <strong>Docker</strong>, docker compose, larasail and <strong>Digital Ocean</strong>
                    </li>
                  </ul>
                </li>
                <li>DeltaTracking</li>
                <ul>
                  <li>June 2022 - December 2022</li>
                  <li>
                    I worked here as a <strong>Backend Developer</strong>, migrating parts from
                    <strong>python</strong> to <strong>java</strong> using <strong>maven</strong>, <strong>django</strong> 
                  </li>
                  <li>Also I worked with <strong> aws instances and buckets</strong></li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInformation;
