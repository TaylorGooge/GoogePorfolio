import React from "react";

const About = () => {
  return (
    <section className="position-relative overflow-hidden">
      <div className="container py-9 py-lg-11 position-relative z-1">
        <div className="row align-items-center justify-content-between">
          <div className="order-last col-lg-6">
            <div className="mb-4" data-aos="fade-up">
              <h6 className="mb-0 text-uppercase">Hi! I'm Taylor Googe</h6>
            </div>

            <h2
              className="mb-7 display-5 position-relative z-1"
              data-aos="fade-right"
            >
              {" "}
              Fullstack Software Developer
            </h2>
            <div className="position-relative z-1">
              <div className="d-flex mb-5" data-aos="fade-up" data-aos-delay="150">
                <div className="me-3">
                  <i className="bx bx-check lh-1 width-3x height-3x flex-center rounded-circle bg-body-tertiary text-primary position-relative fs-4"></i>
                </div>

                <div>
                  <h5>My Philsophy</h5>
                  <p className="mb-0 text-body-secondary">
                    Cultivating innovative solutions is ingrained in my DNA. I
                    spearheaded a pioneering Software as a Service (SaaS)
                    solution tailored for agencies distributing scholarship
                    funds in early childhood education. This groundbreaking
                    platform simplifies user and site account creation, hosting
                    a dynamic application brimming with adaptable logic. Its
                    core? To automate and expedite the labyrinthine application
                    process, ensuring seamless approvals, revisions, and
                    rejections.
                  </p>
                </div>
              </div>

              <div className="d-flex mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="me-3">
                  <i className="bx bx-check lh-1 width-3x height-3x flex-center rounded-circle bg-body-tertiary text-primary position-relative fs-4"></i>
                </div>

                <div>
                  <h5>About Me</h5>
                  <p className="mb-0 text-body-secondary">
                    Beyond the realms of education, I ventured into uncharted
                    territories of technology and nature. Fuelled by a
                    zoologist's insight and a passion for birding, I engineered
                    an intuitive bird watching application. Designed for
                    novices, it democratizes birding, eliminating the need for
                    scientific acumen or established protocols.
                  </p>
                  <p className="mb-0 text-body-secondary">
                    As I set my sights on roles within medium to large SaaS
                    enterprises, I bring a zeal for crafting code that's both
                    extensible and efficient. My prowess spans front-end to
                    back-end, complemented by a robust background in testing
                    frameworks. I strive for continuous growth and
                    collaboration, where each project becomes a milestone in an
                    evolving journey.
                  </p>
                  <p className="mb-0 text-body-secondary">
                    Off the screen, you'll find me exploring diverse
                    interests—from strolls with my canine companion to
                    navigating the realms of Baldur's Gate 3. Gourmet dining and
                    nurturing green spaces also captivate my attention, offering
                    a balanced perspective that enriches my approach to
                    development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 col-md-10 me-lg-auto order-1 mb-7 mb-lg-0">
            <div
              className="position-relative"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <div className="bg-warning position-absolute start-0 bottom-0 w-100 h-75 rounded-5"></div>

              <img
                src="img/IMG_0597.jpg"
                alt=""
                className="img-fluid position-relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
