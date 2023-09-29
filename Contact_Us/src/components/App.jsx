import React from "react";

function App() {
  return (
    <div className="container">
      <section>
        <div className="container">
          <div className="contactInfo">
            <div>
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <span>
                    <img
                      src="C:\Users\Admin\Desktop\react_coontact\src\components\assets\location.png"
                      alt="location_img"
                    />
                  </span>
                  <span>
                    184 Ippokratous Street
                    <br />
                    Athens, Gr <br />
                    11472
                  </span>
                </li>
                <li>
                  <span>
                    <img src="/images/mail.png" />
                  </span>

                  <span>
                    <a href="mailto: nassosanagn@gmail.com">
                      nassosanagn@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    <img src="/images/call.png" />
                  </span>
                  <span>702-279-3488</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="contactForm">
            <h2>Send a Message</h2>
            <div className="formBox">
              <div className="inputBox w50">
                <input type="text" name="" required />
                <span>First Name</span>
              </div>
              <div className="inputBox w50">
                <input type="text" required />
                <span>Last Name</span>
              </div>
              <div className="inputBox w50">
                <input type="email" required />
                <span>Email Address</span>
              </div>
              <div className="inputBox w50">
                <input type="text" required />
                <span>Mobile Number</span>
              </div>
              <div className="inputBox w100">
                <textarea required></textarea>
                <span>Write your message here...</span>
              </div>
              <div className="inputBox w100">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
