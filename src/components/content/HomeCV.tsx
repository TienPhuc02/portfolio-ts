import { TypeAnimation } from "react-type-animation";

const HomeCV = () => {
  return (
    <div>
      <div className="arlo_tm_section" id="home">
        <div className="arlo_tm_hero_header_wrap">
          <div className="arlo_tm_universal_box_wrap">
            <div className="bg_wrap">
              <div
                className="overlay_image hero jarallax"
                data-speed="0.1"
              ></div>
              <div className="overlay_color hero"></div>
            </div>
            <div className="content hero">
              <div className="inner_content">
                <div className="image_wrap">
                  <img src="img/hero/phuc.jpg" alt="hero" />
                </div>
                <div className="name_holder">
                  <h3>
                    Fearless <span>Do</span>
                  </h3>
                </div>
                <div className="text_typing">
                  <p>
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed once, initially
                        "I'm a FronEnd DeveLoper",
                        2000,
                        "I'm a Web DeveLoper",
                        2000,
                        "I'm a Freelancer",
                        2000,
                      ]}
                      wrapper={"span"}
                      speed={50}
                      style={{ fontSize: "30px" }}
                      repeat={Infinity}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="arlo_tm_arrow_wrap bounce anchor">
              <a href="#about">
                <i className="xcon-angle-double-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCV;
