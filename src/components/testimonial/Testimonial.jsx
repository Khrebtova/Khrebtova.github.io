import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      avatar: 'https://i.pinimg.com/474x/4a/3a/78/4a3a782d6609fa600e98972c111a92fd.jpg',
      name: 'Mike Wazowski',
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur nemo nisi deserunt accusantium harum fugit sapiente vel, amet ipsum veniam, animi quisquam tempora officiis itaque esse, necessitatibus sequi. Commodi."
    },
    {
      id: 2,
      name: 'Sullivan',
      avatar: 'https://i.pinimg.com/564x/90/10/9e/90109e11b1c4cebb2f030c1dbcb09bd4.jpg',
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur nemo nisi deserunt accusantium harum fugit sapiente vel, amet ipsum veniam, animi quisquam tempora officiis itaque esse, necessitatibus sequi. Commodi."
    },
    {
      id: 3,
      avatar: 'https://i.pinimg.com/564x/fa/d8/3b/fad83b229d4c0666e3f7d45035af5404.jpg',
      name: 'Randal',
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur nemo nisi deserunt accusantium harum fugit sapiente vel, amet ipsum veniam, animi quisquam tempora officiis itaque esse, necessitatibus sequi. Commodi."
    }
  ]

  const renderReviews = reviews.map(review => {
    return(
      <SwiperSlide className='testimonial' key={review.id}>             
        <div className='client_avatar'>
          <img src={review.avatar} alt={review.name} />
        </div>
        <h5 className='client_name'>{review.name}</h5>
        <small className='client_review'> 
          {review.review}
        </small> 
      </SwiperSlide>
    )
  })

  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonial_container"> 
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}          
        >
        {renderReviews}
        </Swiper>               
      </div>
    </section>
  )
}

export default Testimonial