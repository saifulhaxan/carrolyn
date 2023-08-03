import React from 'react';
import visa from "/images/visa.png";
import masterunion from "/images/masterunion.png";
import paypal from "/images/paypal.png";
import visa2 from "/images/visa2.png";
import masterunion2 from "/images/masterunion2.png";
import { Link } from "react-router-dom";

export const BookBox = (props) => {
  return (
    <div className='book_bottom'>
      {props.BookData && props.BookData.map((BookListing, index) => {
        console.log(index);
        return (
          <div className={index % 2 == 0 ? 'book_card' : 'book_card_reverse'} key={index}>
            <div className='book_card_img'>
              <img src={`/images/${BookListing.img}.png`} alt={BookListing.head} />
            </div>
            <div className={index % 2 == 0 ? 'book_card_text' : 'book_card_text_reverse'}>
              <h2>{BookListing.head}</h2>
              <p>{BookListing.desc}</p>
              {BookListing.link && <Link to={`/${BookListing.categoryLink}/${BookListing.id}`}><button className='btn'>Read More</button></Link>}
              <div className='book_card_text_payment'>
                <img src={visa} alt="visa" />
                <img src={paypal} alt="paypal" />
                <img src={masterunion} alt="masterunion" />
                <img src={visa2} alt="visa2" />
                <img src={masterunion2} alt="masterunion2" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
