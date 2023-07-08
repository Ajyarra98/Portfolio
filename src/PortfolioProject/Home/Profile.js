import React from 'react'
import Navbar from './Navbar'
import resume from "./Ajay Resume.pdf";
import dp from "./dp.jpeg";

export default function Profile() {
    return (
      <div className="profile-container">
        <Navbar />
        <div className="container-fluid profilesec">
          <div className="row">
            <div className="col-sm-7 prof-bio">
              <p className="topline1">
                Hello, I am <span className="topline1span">Ajay</span>
              </p>
              <p className="prof-role">Graduate Student at University of Texas at Arlington</p>
              <p className="prof-desc">
              Actively seeking internship opportunities for summer'23 term || Experienced in Python, Javascript, PHP, AWS
              </p>
              <div className="btn-sec">
                <ul className="btn-parent" id="btnresumeid">
                  <li className="btn-item">
                    <a href={resume}>
                      <button className="buttonstyle1">Resume</button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="profpic-parent">
                <img
                  className="profpic"
                  src={dp}
                  alt="Ajay"
                  width="5" 
                  height="500"
                  
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
