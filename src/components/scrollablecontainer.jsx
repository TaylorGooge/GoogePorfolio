import React, { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";

function ScrollableContainer() {
  


    const container = useRef(null);

    useEffect(() => {
      if (container.current) {
        const scroll = new LocomotiveScroll({
          el: container.current,
          smooth: true,
        });

        let vw = window.innerWidth || document.documentElement.clientWidth;
        let maxVw = 320;
        if (vw > maxVw) {
          document.querySelectorAll(".js-hover-img-item").forEach(function (e) {
            let t = e;
            let r = e.querySelector("img");
            let a = r.offsetHeight;
            let l = r.offsetWidth;
            e.addEventListener("mouseenter", (s) => {
              if (!e.classList.contains("is-hover")) e.classList.add("is-hover");
              let o = s.clientX - t.offsetLeft - l / 2.7;
              let u = s.clientY - t.offsetTop - a / 2.5;
              gsap.to(r, { x: o, y: u, rotate: -4 });
            });
            e.addEventListener("mousemove", (s) => {
              let o = s.clientX - t.offsetLeft - l / 2;
              let u = s.clientY - t.offsetTop - a / 2.5;
              gsap.to(r, { x: o, y: u, rotate: -4 });
            });
            e.addEventListener("mouseleave", () => {
              if (e.classList.contains("is-hover"))
                e.classList.remove("is-hover");
              gsap.to(r, { x: 0, y: 0, rotate: 0 });
            });
          });
        }
        return () => {
          if (scroll) scroll.destroy();
        };
      }
    }, []);

    return (
      <main data-scroll-container ref={container}>
        <section
          className="position-relative overflow-hidden bg-gradient-blur"
          data-scroll-section
        >
          <div className="container position-relative z-1">
            <div className="row vh-100 align-items-center">
              <div className="col-xl-10 mx-auto">
                <div className="d-inline-flex">
                  <ul className="js-hover-img">
                    <li className="js-hover-img-item">
                      <h1 className="js-hover-img-link display-1 mb-0">
                        <small className="fs-4 ls-1 fw-normal">
                          👋Hi, I'm Taylor Googe
                        </small>
                        <br />
                        Full Stack Developer.
                      </h1>

                      <img
                        src="img/IMG_0597.jpg"
                        alt="Image"
                        className="img height-2x0 w-auto"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="position-relative overflow-hidden"
          data-scroll-section
        >
          <div className="container py-9 py-lg-11 position-relative z-1">
            <div className="width-20x height-20x position-absolute end-0 bottom-0 me-3 mb-n4 bg-info-subtle d-none d-md-block rounded-circle"
                data-scroll data-scroll-direction="vertical" data-scroll-speed="6">
            </div>
            <div className="width-20x height-20x position-absolute start-0 top-0 me-3 mt-n4 bg-primary-subtle d-none d-md-block rounded-circle opacity-75"
                data-scroll data-scroll-direction="vertical" data-scroll-speed="6">
            </div>

              <div className="row align-items-stretch">
                  <div className="col-md-10 col-xl-6 order-last">
                    <p
                      className="mb-5 fw-light mt-n15 mt-lg-0 position-relative  z-1"
                      data-scroll
                      data-scroll-direction="vertical"
                      data-scroll-speed="3"
                    >
                      Cultivating innovative solutions is ingrained in my DNA. I
                      spearheaded a pioneering Software as a Service (SaaS) solution
                      tailored for agencies distributing scholarship funds in early
                      childhood education. This groundbreaking platform simplifies
                      user and site account creation, hosting a dynamic application
                      brimming with adaptable logic. Its core? To automate and
                      expedite the labyrinthine application process, ensuring seamless
                      approvals, revisions, and rejections.
                    </p>
                    <p
                      className="mb-5 fw-light mt-n15 mt-lg-0 position-relative  z-1"
                      data-scroll
                      data-scroll-direction="vertical"
                      data-scroll-speed="1"
                    >
                      Beyond the realms of education, I ventured into uncharted
                      territories of technology and nature. Fuelled by a zoologist's
                      insight and a passion for birding, I engineered an intuitive
                      bird watching application. Designed for novices, it democratizes
                      birding, eliminating the need for scientific acumen or
                      established protocols.
                    </p>
                    <p
                      className="mb-5 fw-light mt-n15 mt-lg-0 position-relative  z-1"
                      data-scroll
                      data-scroll-direction="vertical"
                      data-scroll-speed="1"
                    >
                      As I set my sights on roles within medium to large SaaS
                      enterprises, I bring a zeal for crafting code that's both
                      extensible and efficient. My prowess spans front-end to
                      back-end, complemented by a robust background in testing
                      frameworks. I strive for continuous growth and collaboration,
                      where each project becomes a milestone in an evolving journey.
                    </p>
                    <p
                      className="mb-5 fw-light mt-n15 mt-lg-0 position-relative  z-1"
                      data-scroll
                      data-scroll-direction="vertical"
                      data-scroll-speed="1"
                    >
                      Off the screen, you'll find me exploring diverse interests—from
                      strolls with my canine companion to navigating the realms of
                      Baldur's Gate 3. Gourmet dining and nurturing green spaces also
                      captivate my attention, offering a balanced perspective that
                      enriches my approach to development.
                    </p>
                  </div>
                <div className="col-md-6 order-1 position-relative">
                  <div
                    className="overflow-hidden position-relative"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="5"
                  >
                    <img
                      src="img/IMG_0597.jpg"
                      alt=""
                      className="img-fluid flip-x d-block"
                    />
                  </div>
                </div>

              </div>
          </div>
        </section>
      </main>
  );
}
export default ScrollableContainer;
