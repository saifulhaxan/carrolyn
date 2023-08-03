import React, { useState } from 'react'
import { SubHeader } from '../../components/SubHeader'
import dogBanner from '../../assets/images/contact-dog.png'
import LayoutTheme from '../Layout'
import { BookBox } from '../../components/BookBox'


const bookDataArray = [
  {
    id: 1,
    head: "Spot On!",
    desc: "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pets...",
    img: "book-card-img-1-revised",
    trailer: "SpotOnCanineBabies-Trailer",
    link: "B096X6HH4B/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i1",
    paperback: "8.99",
    hardcover: "",
    ebook: "3.99",
    categoryLink: 'book-detail'
  },
  {
    id: 2,
    head: "Spot On!",
    desc: "In this second book in the Spot On series, join Lynn and her rescue dogs for another adventure. Animals go through some terrible things in order to survive on their own, which is why Lynn’s rescues are so beloved. This time, they go to Mexico, where a mystery causes chaos at the dog rescue. A scandal evolves. Meanwhile, Lynn is on vacation. Their investigation takes them to New York City’s Chinatown where they must stand...",
    img: "book-card-img-2",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B096TSVMX7/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i2",
    paperback: "11.99",
    hardcover: "28.95",
    ebook: "3.99",
    categoryLink: 'book-detail'
  },
  {
    id: 3,
    head: "Canine Babies",
    desc: "To Lynn, handling some of the worst scenarios is not an unusual condition. Its her life’s work. But when a kidnapping and a murder happen, her focus all of a sudden changes. Something has to be done and Lynn is fearless enough to try. As Lynn and Maryanne carry out their own investigations, the case becomes increasingly personal. Long-submerged secrets surface as Lynn teams up with the cops to solve the puzzle before a cunning killer claims another victim...",
    img: "book-card-img-3",
    trailer: "SpotOnCanineBabies-Trailer",
    link: "B096YJ5FZ4/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i4",
    paperback: "10.50",
    hardcover: "",
    ebook: "9.99",
    categoryLink: 'book-detail'
  },
  {
    id: 4,
    head: "Spot-on: Canines on a Cruise",
    desc: "They say that a dog is among the most loyal animals on earth and a man’s best friend too! Well, it wouldn’t hurt to have one or maybe two fur babies, right? “Spot-on: Canines on a Cruise” is a remarkable novel written by Carolynn Tucciarone which portrays the amazing life of a loving couple that owns a dog rescue in Austin, Texas. From rescuing bull terriers from a ditch to nurturing all injured and abandoned dogs...",
    img: "book-card-img-4",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B098W57CG1/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i3",
    paperback: "9.50",
    hardcover: "",
    ebook: "5.55",
    categoryLink: 'book-detail'
  },
  {
    id: 5,
    head: "SPOT- ON: NEW BEGINNINGS",
    desc: "This book is the end of my SPOT ON SERIES.",
    img: "book-card-img-5",
    trailer: "SpotOnCanineBabies-Trailer",
    link: "B09H3N787N/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i5",
    paperback: "11.99",
    hardcover: "",
    ebook: "0.00",
    categoryLink: 'book-detail'
  },
  {
    id: 6,
    head: "MOVING ON: : TO NEW HEIGHTS & NEW ADVENTURES (New beginning.)",
    desc: "Inspired by actual events, a woman and her friends explore new adventures, ups, and downs on a road trip. She has never traveled alone, so she decides to travel with her close friend. She deeply felt and flawlessly re...",
    img: "book-card-img-7",
    trailer: "SpotOnCanineBabies-Trailer",
    link: "B0B77TFDJV/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0",
    paperback: "9.99",
    hardcover: "",
    ebook: "",
    categoryLink: 'book-detail'
  },
  {
    id: 7,
    head: "NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?",
    desc: "Join hands with Lynn and her friends over a new adventure that will keep you reading with delight. Discover the thrill and excitement of traveling across the cities, meeting your childhood friend, est...",
    img: "book-card-img-8",
    trailer: "SpotOnCanineBabies-Trailer",
    link: "B0B4BRLLFD/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i1",
    paperback: "7.99",
    hardcover: "",
    ebook: "4.99",
    categoryLink: 'book-detail'
  },
];




const illustrationbooks = [
  {
    id: 1,
    head: "Spot On: Chaos At The Dog Rescue",
    desc: "To Lynn, handling some of the worst scenarios is not an unusual condition. Its her life’s work. But when a kidnapping and a murder happen, her focus all of a sudden changes. Something has to be done and Lynn is fearless enough to try..",
    img: "illbook2",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BJ7VWV9W",
    paperback: "9.99",
    hardcover: "",
    ebook: "3.99",
    categoryLink: 'book-detail-illustration'


  },
  {
    id: 2,
    head: "Spot On: Mystery At The Dog Rescue",
    desc: "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pets...",
    img: "illbook1",
    trailer: "SpotOnCanineBabies-Trailer",
    link: "B0BJCBM7PW",
    paperback: "",
    hardcover: "",
    ebook: "3.99",
    categoryLink: 'book-detail-illustration'



  },
  {
    id: 3,
    head: "Spot On: Canine Babies At The Dog Rescue",
    desc: "When Lynn wakes up to find some of her rescue dogs missing, she is terrified. Who would steal her dogs, and for what purpose? The mystery continues when a man is found shot to death at Lynn’s shelter.It soon becomes apparent her pups were stolen to send to China to take part in dogfights. Lynn and her friends cannot let this happen so rush to save their precious pet...",
    img: "illbook3",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BJ7XVN69",
    paperback: "9.00",
    hardcover: "",
    ebook: "3.99",
    categoryLink: 'book-detail-illustration'
  },
  {
    id: 4,
    head: "SPOT ON: Canines on a Cruise",
    desc: "They say that a dog is among the most loyal animals on earth and a man’s best friend too! Well, it wouldn’t hurt to have one or maybe two fur babies, right? “Spot-on: Canines on a Cruise” is a remarkable novel written by Carolynn Tucciarone which portrays the amazing life of a loving couple that owns a dog rescue in Austin, Texas. From rescuing bull terriers from a ditch to nurturing all injured and abandoned dogs...",
    img: "illbook4",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BJ7X187V",
    paperback: "",
    hardcover: "",
    ebook: "3.99",
    categoryLink: 'book-detail-illustration'
  },
  {
    id: 5,
    head: "SPOT- ON: NEW BEGINNINGS",
    desc: "This book is the end of my SPOT ON SERIES.",
    img: "illbook5",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BFJV9NRY",
    paperback: "9.99",
    hardcover: "",
    ebook: "3.49",
    categoryLink: 'book-detail-illustration'
  },
  {
    id: 6,
    head: "NEW BEGINNINGS: DO YOU BELIEVE IN GHOSTS?",
    desc: "Join hands with Lynn and her friends over a new adventure that will keep you reading with delight. Discover the thrill and excitement of traveling across the cities, meeting your childhood friend, est...",
    img: "illbook6",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BFGFT3GQ",
    paperback: "",
    hardcover: "",
    ebook: "3.49",
    categoryLink: 'book-detail-illustration'
  },
  {
    id: 7,
    head: "Moving On: To New Heights & And New Adventures",
    desc: "Inspired by actual events, a woman and her friends explore new adventures, ups, and downs on a road trip. She has never traveled alone, so she decides to travel with her close friend. She deeply felt and flawlessly recounted the...",
    img: "illbook7",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BFJMX9TC",
    paperback: "",
    hardcover: "",
    ebook: "3.49",
    categoryLink: 'book-detail-illustration'
  },
  {
    id: 8,
    head: "PETEY: THE BULL TERRIER",
    desc: "This book is different from my Spot-on series and my Moving On series. This book is about a bull terrier named Petey. he goes on And adventure with his pals from the gromming place and the Dog show...",
    img: "illbook8",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BLVPBT7W",
    paperback: "9.99",
    hardcover: "",
    ebook: "3.99",
    categoryLink: 'book-detail-illustration'
  },
  {
    id: 9,
    head: "GETTING OUT OF THE BOX",
    desc: "Back to the rescue in Texas sage and April want to open an INN....",
    img: "illbook9",
    trailer: "SpotOnMysteryAtTheDogRescue-Trailer",
    link: "B0BM3SC3P4",
    paperback: "14.50",
    hardcover: "",
    ebook: "",
    categoryLink: 'book-detail-illustration'
  },
];

export const BuyNow = () => {
  const [firstBook, secondBook] = useState(false)

  function showFirstBook() {
    secondBook(false)
  }


  function showSecondBook() {
    secondBook(true);
  }
  return (
    <LayoutTheme>
      <SubHeader
        name="Buy Now"
        img={dogBanner}
      />

      <div className="BuyNowPage">
        <h1>Find The Greatest Books On Dogs Here</h1>
        <br />
        <p>
          The love for dogs in humans is visible through the uncountable dog
          storybooks or other dog-related topics to help dog lovers and keepers.
          From entertaining kids to both adults, there is a sea of famous dog
          books on training, dog types, or enthralling stories.
        </p>
        <p>
          I, Carolynn Tucciarone, have made use of my affection for dogs and
          travel experiences to create an incredible suspense story that you
          will love. With Spot On being one of the books about a dog, you will
          also find my other dog books here that will soon be launched.
        </p>
        <p>
          Kids or adults, both will enjoy this full of suspense story that is a
          bit different from the usually published dog training books.
        </p>
        <p>
          It is a treat for readers and dog lovers who will find the dog rescue
          story enthralling. I, myself, am into dogs and books for dogs. So
          writing this book offered me an opportunity to put my love and
          knowledge into words and entertain all of you.
        </p>
        <p>
          You will find the best dog books of all time here as my fur babies
          grow to motivate me to produce more classic dog books. So while you
          read my first book, my canine babies and I will be back with more!
        </p>
        <div className="buynow_tabs_links">
          <button className="btn" onClick={showFirstBook}>Story Books</button>
          <button className="btn" onClick={showSecondBook}>Illustration Books</button>
        </div>
        <div className='book_bottom'>
          {
            firstBook == false ?
              <BookBox BookData={bookDataArray} />
              :
              <BookBox BookData={illustrationbooks} />
          }
        </div>
      </div>

    </LayoutTheme>
  )
}
