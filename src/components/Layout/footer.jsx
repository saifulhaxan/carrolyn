import React from 'react'
import visa from "../../assets/images/visa.png";
import masterunion from "../../assets/images/masterunion.png";
import paypal from "../../assets/images/paypal.png";
import visa2 from "../../assets/images/visa2.png";
import masterunion2 from "../../assets/images/masterunion2.png";
import footedog from "../../assets/images/footer-dog.png"

export const Footer = () => {

  const footerdata = [
    {
      icon: "footer-email",
      head: "EMAIL US AT",
      desc: "carolynn1949@gmail.com"
    },
  ]

  const footerdataarr = footerdata.map(cvalue => <>

    <div className='footer_data'>
      <div className='footer_data_top'>
        <img src={`/src/assets/images/${cvalue.icon}.png`} />
      </div>
      <div className='footer_data_bottom'>
        <p>{cvalue.head}</p>
        <p>{cvalue.desc}</p>
      </div>
    </div>

  </>)

  return (
    <div className="Footer">
      <div className='footer_dog_img'>
        <img src={footedog} />
      </div>
      <div className='footer_top'>

        {footerdataarr}
      </div>
      <div className='footer_bottom'>
        <p>Carolynntucciarone © Copyrights  2022 All Rights Reserved</p>
        <div className='footer_payments'>
          <img src={visa} />
          <img src={masterunion} />
          <img src={paypal} />
          <img src={masterunion2} />
          <img src={visa2} />
        </div>
      </div>
    </div>
  )
}
