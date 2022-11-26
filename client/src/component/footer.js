import React from "react";

import '../App.css';

function footer() {
    return (

      <>
  {/* ======= Footer ======= */}
  <footer>
    <div className="footer-area ">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-content">
              <div className="footer-head">
                <div className="footer-logo">
                  <h2>
                    <span>eye</span>foundation
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis.
                </p>
                <div className="footer-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* end single footer */}
          <div className="col-md-4">
            <div className="footer-content">
              <div className="footer-head">
                <h4>information</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <div className="footer-contacts">
                  <p>
                    <span>Tel:</span> 01141086655, 01141046655, 
                  </p>
                  <p>
                    <span>Mob:</span> +91 9319909455, 
                  </p>
                  <p>
                    <span>Email:</span> contact@example.com
                  </p>
                  <p>
                    <span>Working Hours:</span> 9am-5pm
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end single footer */}
          <div className="col-md-4">
            <div className="footer-content">
              <div className="footer-head">
                <h4>Instagram</h4>
                <div className="flicker-img">
                  <a href="#">
                   <img src={'../assets/IMG_20210806_123841.jpg'} alt="" />
                  </a>
                  <a href="#">
                  <img src={'../assets/IMG_20210806_123841.jpg'} alt="" />
                  </a>
                  <a href="#">
                  <img src={'../assets/IMG_20210806_123841.jpg'} alt="" />
                  </a>
                  <a href="#">
                  <img src={'../assets/IMG_20210806_120504.jpg'} alt="" />
                  </a>
                  <a href="#">
                  <img src={'../assets/IMG_20210806_123841.jpg'} alt="" />
                  </a>
                  <a href="#">
                  <img src={'../assets/IMG_20210806_124514.jpg'} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-area-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="copyright text-center">
              <p className="text-white">
                © Copyright <strong>Natram</strong>. All Rights Reserved
              </p>
            </div>
            <div className="credits">
              {/*
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=eBusiness
      */}
            <a href="https://www.natram.co.in/">www.natram.co.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End  Footer */}


</>




    )
}

export default footer;