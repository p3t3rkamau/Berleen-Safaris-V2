import React from 'react'
import Slider from 'react-slick'
import ava01 from "../../assets/images/ava-1.jpg"
import ava02 from "../../assets/images/ava-2.jpg"
import ava03 from "../../assets/images/ava-3.jpg"

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }

    return (
        <Slider {...settings}>
            <div className="testimonials py-4 px-3">
                <p>
                    “Berleen Safaris gave me the best experience of my life! I got to see the Big Five up close in Masai Mara, and the guides were super knowledgeable and friendly.”
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="user avatar" />
                    <div>
                        <h6 className="mb-0 mt-3">Achieng Otieno</h6>
                        <p>Nairobi, Kenya</p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-4 px-3">
                <p>
                    “From the Serengeti plains to Zanzibar’s beaches, Berleen Safaris made my honeymoon unforgettable. They really understand African beauty.”
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="user avatar" />
                    <div>
                        <h6 className="mb-0 mt-3">Thabo Mokoena</h6>
                        <p>Johannesburg, South Africa</p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-4 px-3">
                <p>
                    “I had always dreamed of visiting Africa. Thanks to Berleen Safaris, I got more than I imagined – warm hospitality, breathtaking scenery, and smooth travel.”
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="user avatar" />
                    <div>
                        <h6 className="mb-0 mt-3">Emily Carter</h6>
                        <p>Manchester, UK</p>
                    </div>
                </div>
            </div>

            <div className="testimonials py-4 px-3">
                <p>
                    “I love wildlife photography and Berleen Safaris helped me capture shots I thought I’d only see on National Geographic. Can’t wait for the next tour!”
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="user avatar" />
                    <div>
                        <h6 className="mb-0 mt-3">Joseph Karanja</h6>
                        <p>Naivasha, Kenya</p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials
