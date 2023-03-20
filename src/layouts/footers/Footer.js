import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { footerSlider } from "../../sliderProps";

const Footer = ({ noBg, extraCls }) => {
  return (
    <footer
      className={`main-footer ${extraCls ? extraCls : "style-two"}`}
      style={{
        background:'#f8faf9'
      }}
      id="contact"
    >
      <div className="auto-container">
        <div className="widget-wrapper">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-logo" style={{
        background:'#f8faf9'
      }}>
                <img src="https://img.myloview.com/murals/art-artwork-background-black-blessing-culture-decorated-decoration-deity-design-devotion-festival-god-graphic-hindu-hinduism-india-indian-logo-lord-maha-maha-shivratri-mahadev-m-400-236118854.jpg" alt="" />
              </div>
            </div>
            <div className="column col-lg-3 col-md-6">
              <div className="widget links-widget" >
                <h2 style={{fontWeight:"600" }}>Pages</h2><br/>
                <div className="row">
                  <div className="col-sm-6">
                    <ul>
                    <li>
                        <a href="/" >Home</a>
                      </li>
                      <li>
                        <a href="#about" >About</a>
                      </li>
                      <li>
                        <a href="#room">Rooms</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                      {/* <li>
                        <a href="#">Reviews</a>
                      </li>
                      <li>
                        <a href="#">Insights</a>
                      </li> */}
                    </ul>
                  </div>
                  {/* <div className="col-sm-6">
                    <ul>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Our Menus</a>
                      </li>
                      <li>
                        <a href="#">Shop</a>
                      </li>
                      <li>
                        <a href="#">Contacts</a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* <div className="widget text-widget">
                <h4>Our Awards</h4>
                <div className="text">
                  When your people get up every day <br /> wanting to come to
                  work.
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="logo">
                      <img src="assets/images/resource/image-15.png" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="logo">
                      <img src="assets/images/resource/image-16.png" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="logo">
                      <img src="assets/images/resource/image-17.png" alt="" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-lg-3 col-md-6" >
              <div className="widget contact-widget">
                <h2 style={{fontWeight:"600"}}>Contact Us</h2><br/>
                <div className="text">
                  Welcome to Shiv Niwas , where comfort is everything.
                </div>
                <ul>
                  <li>
                    <i className="fal fa-phone" />
                    <a href="tel:8210310113">8210310113</a><br/>
                    {/* <i className="fal fa-phone" /><a href="tel:8217556118">8217556118</a><br/>
                    <i className="fal fa-phone" /><a href="tel:8310975697">8310975697</a> */}
                  

                  </li>
                  <li>
                    <i className="fal fa-envelope" />
                    <a href="mailto:shiv.niwas09@gmail.com">shiv.niwas09@gmail.com</a>
                  </li>
                  <li>
                    <i className="fal fa-map-marker-alt" /> Near Acharya hostel,<br/>Soldevanhalli, karnataka 560107
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      {/* <div className="footer-bottom">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="copyright">
              <div className="text">Copyright Kingho. All right reserved.</div>
            </div>
            <div className="brand-logo">
              <Swiper
                {...footerSlider}
                className="theme_carousel swiper-container"
              >
                <SwiperSlide className="logo">
                  <img src="assets/images/resource/image-18.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="logo">
                  <img src="assets/images/resource/image-19.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="logo">
                  <img src="assets/images/resource/image-20.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};
export default Footer;
