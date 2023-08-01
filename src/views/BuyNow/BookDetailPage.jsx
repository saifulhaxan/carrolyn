import { React, useEffect, useState } from 'react'
import LayoutTheme from '../Layout'
import { SubHeader } from '../../components/SubHeader'
import dogBanner from '../../assets/images/gallery-dog2.png'
import { useNavigate, useParams } from 'react-router-dom'

export const BookDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [bookDetail, bookDetailData] = useState({});
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
    useEffect(() => {
        bookDataArray.forEach((item) => {
            if (item.id == id) {
                bookDetailData(item)
            }
        })
    })
    return (
        <LayoutTheme>
            <SubHeader
                name="Buy Now Detail"
                img={dogBanner}
            />
            <div className='BuyNowDetail'>
                <div className='buynowdetail_left'>
                    <h1>{bookDetail.head}</h1>
                    <p>{bookDetail.desc}</p>
                    <div className='BuyNowDetail_pricing'>
                        {bookDetail.paperback === "" ? <></> : <><a href={`https://www.amazon.com/gp/product/${bookDetail.link}`}><span>Paperback - ${bookDetail.paperback} (BUY FROM AMAZON)</span></a></>}
                        {/* <a href={`https://www.amazon.com/gp/product/${bookDetail.link}`}><span>Paperback - ${bookDetail.paperback} (BUY FROM AMAZON)</span></a> */}
                        {bookDetail.Ebook === "" ? <></> : <><a href={`https://www.amazon.com/gp/product/${bookDetail.link}`}><span>E-Book - ${bookDetail.Ebook} (BUY FROM AMAZON)</span></a></>}
                        {bookDetail.Hardcover === "" ? <></> : <>    <a href={`https://www.amazon.com/gp/product/${bookDetail.link}`}><span>Hardcover - ${bookDetail.Hardcover}</span></a></>}
                    </div>
                </div>
                <div className='buynowdetail_right'>
                    <img src={`/src/assets/images/${bookDetail.img}.png`} />
                    {/* <Player
                    src={bookDetail.trailer}
                    aspectRatio="auto"
                /> */}
                </div>
            </div>
        </LayoutTheme>
    )
}
