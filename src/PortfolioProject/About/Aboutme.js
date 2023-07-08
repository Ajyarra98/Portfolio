import React from 'react';
import './Aboutme.css';
import sidebar from './sidebar.jpg';
import merncode from './merncode2.jpg'; 
export default function Aboutme() {
    return (
      <div>
        <div className="container aboutsec" id="aboutid">
          <p className="aboutmehead">About me</p>
          <div className="row aboutrow">
            <div className="col-sm-4 myinfo">
              <div className="my-contact-info">
                <div className="my-info">
                  <img
                    className="sidebarimg"
                    src={merncode}
                    alt="coding image"
                  ></img>
                </div>
                <div className="mygoal">
                  <p className="careerobj">My Career Objective</p>
                  <p className="myobj">
                    To work in a company with a professional work driven
                    environment where I can utilize and apply my knowledge,
                    skills which would enable me as a fresh graduate to grow
                    while fulfilling organizational goals
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <p className="job-desc">
                Full stack web developer with a knack of buildng applications with
                utmost efficiency. Strong professional with a Computer science
                in B.tech willing to be an asset for an organisation.{" "}
              </p>
              <br />
              <br />
              <p className="highlights">Here are few Highlights : </p>
              <br />
              <div className="bullet-sec">
                <ul className="bullet-ul">
                  <li className="bullet-list">
                    Full stack web development
                  </li>
                  <li className="bullet-list">
                    Interactive and responsive Frontend as per the design
                  </li>
                  <li className="bullet-list">
                    Web Scraping using Python
                  </li>
                  <li className="bullet-list">Building REST API's </li>
                  <li className="bullet-list">
                    Handling Cpanel , WHM server management{" "}
                  </li>
                  <li className="bullet-list">Managing databases </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
