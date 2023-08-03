import React from 'react'
import LayoutTheme from '../Layout';
import { SubHeader } from '../../components/SubHeader';
import dogBanner from '../../assets/images/gallery-dog2.png'
import authorimg from "../../assets/images/author-img.png"
import { About } from '../../components/About';
import { ReviewsBox } from '../../components/Reviews';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Contact } from '../../components/Contact';

const AboutData = [
  "As a passionate reader and author, I understand the importance of catering to specific interests and providing personalized experiences through literature. That is why I am delighted to present to you my latest creation—an exceptional addition to the world of personalized dog books for adults.",

  "Within the realm of fiction books for dog lovers, this particular offering stands out, capturing the hearts and imaginations of readers seeking a truly engaging narrative. Combining the love for dogs with captivating storytelling, this book serves as a personalized dog story that celebrates the remarkable bond between humans and their furry friends.",

  "TWhile its appeal extends beyond age boundaries, this book has also received recognition as one of the best children's books about dogs. Its delightful and educational content makes it a wonderful resource for young readers, instilling important values of love, compassion, and animal welfare.",

  "Furthermore, rest assured that this book goes beyond the ordinary. It merges the familiarity of cherished pets and their unique personalities with elements of mystery and intrigue, creating a captivating blend that will keep readers entertained. Laughter, suspense, and heartfelt moments are woven throughout the storyline, making it a truly immersive experience.",

  "Drawing from my own experiences of volunteering at a rescue organization and traveling to China, I have crafted a literary work that speaks directly to the hearts of animal lovers worldwide. In addition to providing an engaging reading experience, this book sheds light on the global need for animal rescue and emphasizes the transformative power of love and attention.",

  "I invite you to embark on this remarkable literary journey—of dog story books that transcends boundaries, captivates readers of all ages, and leaves an indelible mark on the hearts of dog lovers everywhere."
]


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

export const AboutPage = () => {
  return (
    <LayoutTheme>

      <SubHeader
        name="About Us"
        img={dogBanner}
      />

      <About
        title="About Author"
        description={AboutData}
        img={authorimg}

      />

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
  )
}

