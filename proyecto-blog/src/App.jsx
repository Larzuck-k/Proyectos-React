import { useState } from "react";
import { Link } from 'react-router-dom';

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  document.body.style = 'background: #0e1b25;';
  return (
    <>
      <div className="container mb80">
        <div className="page-timeline">
          <div className="vtimeline-point">
            <div className="vtimeline-icon">
              <i className="fa fa-image"></i>
            </div>
            <div className="vtimeline-block ">
              <span className="vtimeline-date">June 25, 2020</span>
              <div className="vtimeline-content">
                <a href="#" class=" link-light text-decoration-none d-flex align-items-center">
                  <img
                    src="https://placehold.jp/50x50.png"
                    alt=""
                    class="img-fluid rounded-5"
                  />
                  <h3 className="mx-2">Admin</h3>
                </a>{" "}
                <p></p>
                <br />
              
                <a href="#">
                  <h3 className="link-light text-decoration-none">Standard post title</h3>
                </a>
                <p></p>
             <span className="text-white">   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
                tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
                eget efficitur libero. Morbi dapibus porta quam laoreet
                placerat.</span>
                <p></p>
                <br />
                <div className="fondo3 inner-shadow rounded p-3">
                  <div className="rounded-3 fondo2 p-2 my-3">
                    <span href="#" class="d-flex align-items-center">
                      <img
                        src="https://placehold.jp/50x50.png"
                        alt=""
                        class="img-fluid rounded-5"
                      />
                      <h3 className="mx-2 link-light text-decoration-none">Usuario</h3>
                    </span   >
                    <p></p>
                    <br />
                    <span className="text-white">
                  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi
                    ut tortor nec nulla commodo malesuada sit amet vel lacus.
                    Fusce eget efficitur libero. Morbi dapibus porta quam
                    laoreet placerat.
                    </span>
                    <p></p>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
