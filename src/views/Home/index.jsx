import React from 'react'
import { Link } from 'react-router-dom'
import LayoutTheme from '../Layout'
import { Banner } from '../../components/Banner'
import landingdog from "../../assets/images//dog-landing.png"
import authorimg from "../../assets/images/author-img.png"
import { About } from '../../components/About'
import { Gallery } from '../../components/Gallery'
import dog1 from "../../assets/images/gallery-dog-1.png"
import dog2 from "../../assets/images/gallery-dog2.png"
import { BookBox } from '../../components/BookBox'
import { ReviewsBox } from '../../components/Reviews'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Contact } from '../../components/Contact'



const AboutData = [
  "As a passionate reader and author, I understand the importance of catering to specific interests and providing personalized experiences through literature. That is why I am delighted to present to you my latest creation—an exceptional addition to the world of personalized dog books for adults.",

  "Within the realm of fiction books for dog lovers, this particular offering stands out, capturing the hearts and imaginations of readers seeking a truly engaging narrative. Combining the love for dogs with captivating storytelling, this book serves as a personalized dog story that celebrates the remarkable bond between humans and their furry friends.",

  "TWhile its appeal extends beyond age boundaries, this book has also received recognition as one of the best children's books about dogs. Its delightful and educational content makes it a wonderful resource for young readers, instilling important values of love, compassion, and animal welfare.",

  "Furthermore, rest assured that this book goes beyond the ordinary. It merges the familiarity of cherished pets and their unique personalities with elements of mystery and intrigue, creating a captivating blend that will keep readers entertained. Laughter, suspense, and heartfelt moments are woven throughout the storyline, making it a truly immersive experience.",

  "Drawing from my own experiences of volunteering at a rescue organization and traveling to China, I have crafted a literary work that speaks directly to the hearts of animal lovers worldwide. In addition to providing an engaging reading experience, this book sheds light on the global need for animal rescue and emphasizes the transformative power of love and attention.",

  "I invite you to embark on this remarkable literary journey—of dog story books that transcends boundaries, captivates readers of all ages, and leaves an indelible mark on the hearts of dog lovers everywhere."
]

const GalleryImages = ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.png', 'gallery-6.png']


const bookDataObject = [
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
  },
];

const firstThreeBooks = bookDataObject.slice(0, 3);

const feebackdata = [
  {
    desc: "As a lifelong dog lover and avid reader, I can confidently say that the books on this website have captured my heart. The author's deep understanding of the canine world is evident in every page, and their storytelling skills are exceptional. These books have taken me on incredible journeys filled with adventure, laughter, and tears. I highly recommend them to all fellow dog enthusiasts!",
    name: "Sarah Peterson",

  },
  {
    desc: "I stumbled upon this author's dog books while searching for a gift for my daughter, who adores dogs. Little did I know that I would become just as engrossed in the stories as she is! The author's ability to portray the unique personalities of different dog breeds is truly remarkable. The books are not only entertaining but also educational, teaching valuable life lessons through the eyes of our furry friends. We can't wait for the next installment!",
    name: "Michael Johnson",
  },
  {
    desc: "Being a dog trainer, I've read my fair share of books on dogs, but none have left such a lasting impression as the ones on this website. The author's authentic portrayal of the bond between humans and dogs resonated deeply with me. Their books are a delightful blend of heartwarming moments and thought-provoking insights into the canine psyche. I've recommended these books to my clients, and they've all come back thanking me for the recommendation!",
    name: "Emily Collins",
  },
  {
    desc: "As a parent, I'm always on the lookout for books that my kids will enjoy and learn from. These dog books have become a staple in our household. The author's captivating storytelling has kept my children hooked from start to finish. Not only have these books sparked their imagination, but they've also taught them valuable lessons about responsibility, empathy, and the importance of treating animals with love and kindness. We can't get enough of these wonderful stories!",
    name: "Harry Styles",
  },
]




export const Home = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <LayoutTheme>
        <Banner
          title="Welcome to Carolynntucciarone"
          subTitle="Dogs Leave Paw Prints Forever On Our Hearts"
          description="Welcome to the ultimate destination for dog lovers! Explore our curated collection of the best books for dog lovers, offering heartwarming tales and invaluable insights into the canine world. Embark on a literary journey that celebrates the bond between humans and their furry companions. Discover the perfect companionship through our selection of captivating reads."
          btnTxt="Explore More"
          bannerImage={landingdog}
        />

        <About
          title="About Author"
          description={AboutData}
          btnTxt="Read More"
          link="/about-us"
          img={authorimg}

        />

        <Gallery
          containerClass="Gallery"
          firstClass="dog_img_1"
          topImage={dog1}
          title="Our Gallery"
          description="Welcome to our Gallery, where we showcase the captivating world of dogs through stunning visuals. Discover heartwarming moments, playful antics, and the undeniable charm of our furry companions. Enjoy the adorable canines that grace our collection."
          galleryClass="grid"
          GalleryData={GalleryImages}
          btnTxt="Explore More"
          img={dog2}

        />
        { /* book section */}
        <div className="Book">
          <div className="book_top">
            <h1>TO TAKE A GLIMPSE OF THE BOOK</h1>
            <p>
              Here you'll discover an exquisite collection of captivating best dog books for kids that will delight both avid enthusiasts and curious readers. Explore the pages and embark on a journey through the heartwarming tales of our loyal four-legged companions.
            </p>
          </div>
          <BookBox
            BookData={firstThreeBooks}
          />
          <Link to="/buynow" className='btn-black d-inline-block'>View More</Link>
        </div>

        {/* review section  */}

        <div className="Feedback">
          <div class="Feedback_img_1">
            <img src="/src/assets/images/feedback-dog.png" />
          </div>
          <div class="feedback_top">
            <h1>Our Client Feedback</h1>
            <p>Discover what our readers are saying about our captivating dog books. Dive into heartfelt testimonials that showcase the transformative power of our stories, bringing joy and enlightenment to dog lovers worldwide</p>
          </div>

          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={3000}
          >
            {
              feebackdata && feebackdata.map((ReviewData, index) => {
                console.log(ReviewData);
                return (
                  <ReviewsBox
                    key={index}
                    title={ReviewData.name}
                    description={ReviewData.desc}
                  />
                );
              })
            }
          </Carousel>
        </div>
        <div className='ContactPage'>
          <Contact />
        </div>



      </LayoutTheme>
    </>


  )
}
