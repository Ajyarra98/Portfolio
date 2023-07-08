import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'
export default function Contact() {
   const Sendemail = (e) => {
        e.preventDefault()
        emailjs
          .sendForm(
            "service_kldamqf",
            "template_8y13ms5",
            e.target,
            "ksPm5FRceeLL7gLl0"
          )
          .then((res) => alert("Thanks for your interest in my profile "))
          .catch((err) => console.log(err));
    }
    return (
      <div>
        <p className="aboutmehead">Contact me</p>
        <div className="container contactsec" id="contactid">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <p className="getintouch">Get in touch</p>
              <p className="mobileno">
                <span>
                  <i class="fa fa-phone"></i>
                </span>
                &nbsp;&nbsp;+1 4699716964
              </p>
              <p className="mailid">
                <span>
                  <i class="fa fa-envelope"></i>
                </span>
                &nbsp;&nbsp;ajayyarra98@gmail.com
              </p>
              <p className="mailid">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/developerajayyerra/"
                >
                  <i id="icon1" class="fab fa-linkedin"></i>
                </a>{" "}
                {/* <span>
                  <a
                    id="icon2"
                    target="_blank"
                    href="https://github.com/madhu2606997"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </span> */}
              </p>
              <img
                src="https://media.istockphoto.com/photos/white-chat-bubble-with-email-symbol-on-blue-background-picture-id1157006349?b=1&k=20&m=1157006349&s=170667a&w=0&h=LsNa8rIdXI7BWRgiLRIm2fH6GVkHxfyyJtIKNlLEPAI="
                alt="contact us"
                className="emailimg"
              ></img>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="form-ui">
                <form onSubmit={Sendemail}>
                  <p className="form-label">Name</p>
                  <input name="name" type="text" className="nameinpt"></input>
                  <br />
                  <br />
                  <p className="form-label">Email</p>
                  <input name="email" type="text" className="nameinpt"></input>
                  <br />
                  <br />
                  <p className="form-label">Message</p>
                  <textarea
                    name="message"
                    rows="3"
                    type="text"
                    className="nameinpt"
                  ></textarea>
                  <br />
                  <br />
                  <button type="submit" className="buttonstyle">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
