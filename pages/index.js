import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DatePicker from "../src/components/DatePicker";
import Layouts from "../src/layouts/Layouts";
import {
  bannerSlider,
  sponsorsSlider,
  testimonialSlider,
} from "../src/sliderProps";
import {FaUserGraduate} from 'react-icons/fa'
const Index = () => {
  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);
  return (
    <Layouts noBg extraCls={"ex"} headernumber>
      {/* Bnner Section */}
      <section className="banner-section">
        <div className="shape">
          <img src="assets/images/shape/shape-3.png" alt="" />
        </div>
        {/* <div className="big-title">Booking</div> */}
        <Swiper {...bannerSlider} className="swiper-container banner-slider">
          <div className="swiper-wrapper">
            {/* Slide Item */}
            <SwiperSlide className="swiper-slide">
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner">
                    <div className="logo">
                      {/* <img src="assets/images/pgroom1.jpeg" alt="" /> */}
                    </div>
                    <h1 className="banner-title">
                      Welcome to  <br />
                      Shiv Niwas <br />
                      PG
                    </h1>
                    <div className="link-box">
                      <Link href="#room">
                        <a className="theme-btn btn-style-one">
                          <span>View Our Rooms</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="image-box">
                    <div className="image">
                      <img src="assets/images/shivpg3.jpeg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide Item */}
            <SwiperSlide className="swiper-slide">
              <div className="content-outer">
                <div className="content-box">
                  <div className="inner">
                    <div className="logo">
                      {/* <img src="assets/images/icons/pgroom1.jpeg" alt="" /> */}
                    </div>
                    <h1 className="banner-title">
                      Welcome to <br />
                     Shiv Niwas<br />
                       PG
                    </h1>
                    <div className="link-box">
                      <Link href="#room">
                        <a className="theme-btn btn-style-one">
                          <span>View Our Rooms</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="image-box">
                    <div className="image">
                      <img src="assets/images/shivpg3.jpeg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="banner-slider-nav">
          <div className="banner-slider-control banner-slider-button-prev">
            <span>
              <i className="fas fa-arrow-right" />
            </span>
          </div>
          <div className="banner-slider-control banner-slider-button-next">
            <span>
              <i className="fas fa-arrow-right" />
            </span>{" "}
          </div>
        </div>
      </section>
      {/* End Bnner Section */}
      {/* Check availability */}
      {/* <div className="check-availability">
        <div className="auto-container">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="left-side">
              <ul>
                <li>
                  {/* <input
                    type="date"
                    placeholder="Arrival Date"
                    className="datepicker"
                  />{" "} */}
                  {/* <i className="far fa-calendar-alt" /> }

                  <DatePicker
                    date={date}
                    onChange={setDate}
                    placeholder={`Arrival Date`}
                  />
                </li>
                <li>
                  <DatePicker
                    date={date2}
                    onChange={setDate2}
                    placeholder={`Departure Date`}
                  />
                </li>
                <li>
                  <select>
                    <option data-display="Aduls">Aduls</option>
                    <option value={1}>0 Adul</option>
                    <option value={2}>1 Adul</option>
                    <option value={4}>2 Aduls</option>
                    <option value={4}>3 Aduls</option>
                    <option value={4}>4 Aduls</option>
                    <option value={4}>5 Aduls</option>
                  </select>
                </li>
                <li>
                  <select>
                    <option data-display="Childrens">Childrens</option>
                    <option value={1}>0 Children</option>
                    <option value={2}>1 Children</option>
                    <option value={4}>2 Childrens</option>
                    <option value={4}>3 Childrens</option>
                    <option value={4}>4 Childrens</option>
                    <option value={4}>5 Childrens</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="right-side">
              <button type="submit">check availability</button>
            </div>
          </form>
        </div>
      </div> */}
      {/* section one */}
      <section className="section-one">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="block-one">
                <div className="row align-items-center">
                  {/* <div className="col-md-6">
                    <div className="image mb-30">
                      <img src="assets/images/shivpg1.jpeg" alt="" />
                    </div>
                  </div> */}
                  <div className="col-md-6">
                    <div className="inner-box mb-30">
                      <div className="image-two">
                        <img style={{maxWidth:"none"}} src="assets/images/shivpg1.jpeg" alt="" />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-two text-center">
                <div className="image mb-10" id="about">
                  {/* <img src="assets/images/shivpg3.jpeg" alt="" /> */}
                </div>
                <h2 className="sec-title" >
                  Welcome To Our <br />{" "}
                  <span className="theme-color">Hostel</span>{" "}
                </h2>
                <div className="text-two">
                Shiv Nivas PG is an excellent choice for anyone looking for a comfortable and affordable stay..
                </div>
                <div className="bottom-content justify-content-center">
                  <div className="ratings">4.6</div>
                  <div className="text-three">
                    Students <br /> Ratings
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New features */}


      <section className="section-six">
        <div className="auto-container " >
          {/* <div className="sub-title text-center">Features</div> */}
          <h2 className="sec-title text-center">Speciality for Student</h2>
          <div className="row" style={{display:"flex" , justifyContent:"center"}}>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="block-six">
                <h4 style={{fontSize:"1.5rem",fontWeight:"600"}}>Study Table with</h4>  <br/>         
              <div style={{display:"flex",justifyContent:"center"}}><ul>
                <li style={{textAlign:"start"}}>• Pin Board</li>
                <li style={{textAlign:"start"}}>• Table Lamp</li>
                <li style={{textAlign:"start"}}>• Book Shelf</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="block-six">
                <h4 style={{fontSize:"1.5rem",fontWeight:"600"}}>Bed With</h4>           
              <div style={{display:"flex" , justifyContent:"center"}}><ul>
                <li style={{textAlign:"start"}}>• Side Table  </li>
                <li style={{textAlign:"start"}}>• Mattress</li>
                <li style={{textAlign:"start"}}>•  Bedsheet</li>
                <li  style={{textAlign:"start"}}>•  Pillow</li>
                </ul>
                </div>
              </div>
            </div><br/>
            <div className="col-lg-6 col-md-4 col-sm-6">
              <div className="block-six">
                <h4 style={{fontSize:"1.5rem",fontWeight:"600"}}>Power Back Up with</h4>           
              <div style={{display:"flex" , justifyContent:"center"}} ><ul>
                <li style={{textAlign:"start"}}>• TV</li>
                <li style={{textAlign:"start"}}>• Washing Machine</li>
                <li style={{textAlign:"start"}}>• Geyser</li>
                <li style={{textAlign:"start"}}>• Water Purifier  </li>
                {/* <li style={{textAlign:"start"}}>•  CCTV  </li> */}
                </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="block-six">
                <h4 style={{fontSize:"1.5rem",fontWeight:"600"}}>24*7 Water with</h4>           
              <div  style={{display:"flex" , justifyContent:"center"}}><ul>
                <li style={{textAlign:"start"}}>• Sofa  </li>
                <li style={{textAlign:"start"}}>• Fridge</li>
                <li style={{textAlign:"start"}}>• First Aid</li>
                <li style={{textAlign:"start"}}>• Ambulance</li>
                </ul>
                </div>
              </div>
            </div>
           
           
          </div>
        </div>
      </section>







      {/* section two */}
      <section className="section-two">
        <div className="auto-container">
         
          <h2 className="sec-title text-center text-light">
             Special Meals 
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="block-three">
                <div className="image">
                  <img src="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/12-feb/Everyday_Meal_Plate_Beetroot_Sambar_Raw_Banana_Thoran_Dondakkai_Curry-1.jpg" alt="" />
                </div>
                <div className="inner-box">
                  
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-three">
                <div className="image" style={{height:"30rem"}}>
                  <img src="https://thumbs.dreamstime.com/b/mess-food-hostel-mess-food-mess-food-hostel-mess-food-211135230.jpg" alt="" />
                </div>
                <div className="inner-box">
                 
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-three">
                <div className="image">
                  <img src="https://www.sharda.ac.in/attachments/infrastructure_images/mess1.png" alt="" />
                </div>
                <div className="inner-box">
                  {/* <div className="title">Free Membership</div> */}
                  <div className="text">
                    Mess <br /> View!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* section four */}
      <section className="section-four" id="room">
        <div className="auto-container">
          {/* <div className="sub-title text-center">Gallary</div> */}
          <h2 className="sec-title text-center">Rooms</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="block-four">
                <div className="image">
                  <img src="assets/images/shivpg1.jpeg" alt="" />
                </div>
                <div className="inner-box">
                  {/* <div className="pricing">$100 per day</div> */}
                  <div className="text">Single & Double Sharing Bed</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-four">
                <div className="image">
                  <img src="assets/images/pgroom2.jpeg" alt="" />
                </div>
                <div className="inner-box">
                  {/* <div className="pricing">$100 per day</div> */}
                  <div className="text">Almirah </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="block-four">
                <div className="image">
                  <img src="assets/images/shivpg3.jpeg" alt="" />
                </div>
                <div className="inner-box">
                  {/* <div className="pricing">$100 per day</div> */}
                  <div className="text">Nice Building</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-four">
                <div className="image">
                  <img src="assets/images/shivpg2.jpeg" alt="" />
                </div>
                <div className="inner-box">
                  {/* { <div className="pricing">$100 per day</div> } */}
                  <div className="text">Nice Building</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* section six */}
      <section className="section-six">
        <div className="auto-container " >
          <div className="sub-title text-center">Features</div>
          <h2 className="sec-title text-center">Core Features</h2>
          <div className="row" style={{display:"flex" , justifyContent:"center"}}>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  <i className="flaticon-wifi-signal" />
                </div>
                <h4>Free Wifi 24*7</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  <i className="flaticon-croissant" />
                </div>
                <h4>Breakfast/Lunch<br/>/Dinner</h4>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  <i className="flaticon-weights" />
                </div>
                <h4>Gym Center NearBy</h4>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="block-six">
                <div className="icon">
                  <i className="flaticon-game-controller" />
                </div>
                <h4>Gaming Zone Nearby</h4>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* section seven */}
      
      {/* <section className="section-seven">
        <h4 className="d-none">heading</h4>
        <div className="auto-container">
          <div className="block-seven">
            {/* <div className="image">
              <img src="assets/images/shivpgvideo.mp4" alt="" />
            </div> }
            <div className="video-btn">
              <a
                href="assets/images/shivpgvideo.mp4"
                className="overlay-link play-now ripple"
                data-fancybox="gallery"
                data-caption=""
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* testimonials section */}
      <section className="testimonials-section">
        <div className="auto-container">
          <div className="top-content">
            <div className="sec-title text-center mb-30">
              {/* <div className="sub-title">Testimonials</div> */}
              <h2 className="sec-title">Student Feedbacks</h2>
            </div>
          </div>
          <div className="row">
            <Swiper
              {...testimonialSlider}
              className="theme_carousel swiper-container"
            >
              <SwiperSlide className="col-lg-12 block-eight text-center">
                {/* <div className="icon">
                  <i className="flaticon-martini" />
                </div> */}
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                    <FaUserGraduate/>
                      {/* <img src="assets/images/resource/image-8.png" alt="" /> */}
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Nirmal ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                    The staff are friendly and always willing to help out with any requests or concerns. Overall, I had a pleasant and comfortable stay at Shiv Nivas PG and would highly recommend it to anyone looking for affordable and convenient accommodation.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                {/* <div className="icon">
                  <i className="flaticon-conference" />
                </div> */}
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                    <FaUserGraduate/>
                      {/* <img src="assets/images/resource/image-9.png" alt="" /> */}
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Piyush Rana  ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                    Shiv Nivas PG is a great place to stay for boys. The rooms are well-furnished and equipped with all the necessary amenities. The location is also quite convenient, with easy access to public transportation and nearby shops and restaurants. 
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                {/* <div className="icon">
                  <i className="flaticon-conference-1" />
                </div> */}
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                    <FaUserGraduate/>
                      {/* <img src="assets/images/resource/image-10.png" alt="" /> */}
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“Aarif Raza”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                    The location was decent, but the lack of basic facilities such as hot water and proper ventilation made my stay quite uncomfortable. I would not recommend Shiv Nivas PG to anyone looking for a comfortable and peaceful stay.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                {/* <div className="icon">
                  <i className="flaticon-martini" />
                </div> */}
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                    <FaUserGraduate/>
                      {/* <img src="assets/images/resource/image-8.png" alt="" /> */}
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Sunny and Ayush ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                    The location was decent, but the lack of basic facilities such as hot water and proper ventilation made my stay quite uncomfortable. I would not recommend Shiv Nivas PG to anyone looking for a comfortable and peaceful stay.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 block-eight text-center">
                {/* <div className="icon">
                  <i className="flaticon-conference" />
                </div> */}
                <div className="inner-box">
                  <div className="author-info">
                    <div className="thumb">
                    <FaUserGraduate/>
                      {/* <img src="assets/images/resource/image-9.png" alt="" /> */}
                    </div>
                    <div className="rating-info">
                      <div className="rating">
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="fas fa-star" />
                        <span className="far fa-star" />
                      </div>
                    </div>
                    <h4>“ Arun &amp; karan ”</h4>
                  </div>
                  <div className="content">
                    <div className="text">
                    I recently stayed at Shiv Nivas PG and was quite disappointed with my experience.
                     The rooms were quite small and cramped, and the cleanliness was subpar.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
          
            </Swiper>
          </div>
        </div>
      </section>
      {/* section nine */}

     
      {/* section ten */}
      <section className="section-ten">
        {/* <div className="auto-container">
          <div
            className="block-eleven"
            style={{
              backgroundImage: "url(assets/images/resource/image-12.jpg)",
            }}
          >
            {/* <div className="inner-box text-center">
              <div className="logo">
                <img src="assets/images/resource/image-11.png" alt="" />
              </div>
              <h5>Late Breakfast Until 10Am</h5>
              <Link href="/menu">
                <a className="theme-btn btn-style-one">
                  <span>Breakfast Menu</span>
                </a>
              </Link>
            </div> /}
          </div>
        </div> */}
      </section>
    </Layouts>
  );
};
export default Index;
