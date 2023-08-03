import React from 'react'
import facebook from "/images/facebook.png"
import twitter from "/images/TwT.png"
import instagram from "/images/Ig.png"
import linkedin from "/images/Ln.png"
import contactdog from "/images/contact-dog.png"

export const Contact = (props) => {
  const contactinfo = [
    {
      icon: "Email",
      head: "Email Address",
      desc: "carolynn1949@gmail.com",
    },
  ];



  const contactinfoarr = contactinfo.map((cvalue) => (
    <>
      <div className="contact_detail">
        {
          props.showImage == true ?
          <div className="contact_detail_left">
            <img src={`/images/${cvalue.icon}.png`} />
          </div>
          : ''
        }
        <div className="contact_detail_right">
          <h4>{cvalue.head}</h4>
          <p>{cvalue.desc}</p>
        </div>
      </div>
    </>
  ));
  return (
    <div className="Contact">

      <div className="contact_left">

        <h1>Contact Info</h1>
        <p>
          LWe would love to hear from you! Whether you have a question, feedback. Please don't hesitate to reach out. You can contact us through the form below or directly via email. We value your input and look forward to connecting with you!
        </p>
        {contactinfoarr}
        <div className="contact_social">
          <img src={facebook} />
          <img src={twitter} />
          <img src={instagram} />
          <img src={linkedin} />
        </div>
      </div>
      <div className="contact_right">
        <div className={props.pagename === "contactpage" ? "displaynone" : "contact_dog"}>
          <img src={contactdog} />
        </div>
        <h1>CONTACT US</h1>
        <p>
          Feel free to drop us a line with any inquiries or collaboration opportunities. We're always excited to explore new ideas and possibilities. Your message is important to us, and we will make sure to respond as soon as possible. Thank you for visiting our website!
        </p>
        <div className="contact_form">
          <form >
            <input type="text" placeholder="Enter Your Full Name" required />
            <input type="email" placeholder="Enter Your Email Address" required />
            <input type="text" placeholder="Enter Your Subject" required />
            <textarea placeholder="Type Your Message Here!" rows="10" required />
            <button type="submit" className="btn">Send Your Message</button>
          </form>

        </div>
      </div>


    </div>
  );
}
