import React, { useEffect, useState, useRef } from "react";
import Nav from "../components/navigation/nav";
import { blogList } from "../api";

const BlogListCom = ({ type, title, baseUrl }) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    let posts = await blogList(type);
    setProjects(posts);
  };

  return (
    <>
      <Nav />
      <main>
        <section
          id="page-header"
          className="position-relative bg-primary-subtle overflow-hidden"
        >
          <div className="container pt-11 pb-9 pb-lg-11 pt-lg-14">
            <div className="row pt-lg-7">
              <div className="col-lg-7">
                <h1 className="mb-0 display-4">{title}</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="position-relative">
          <div className="container py-9 py-lg-11 position-relative z-1">
            <div div className="row" data-isotope='{"layoutMode":"masonry"}'>
              {projects &&
                projects.map((card, index) => (
                  <div className="col-md-6 mb-4 grid-item" key={index}>
                    <div className="text-white bg-dark position-relative d-block overflow-hidden card-hover-2">
                      <img
                        src={card.featuredImage?.url || "/img/bg-blur.svg"}
                        alt={card.title}
                        className="w-100 img-zoom"
                      />
                      <div className="card-hover-2-overlay position-relative start-0 top-0 w-100 h-100 d-flex px-4 py-5 flex-column justify-content-between">
                        <div className="card-hover-2-header w-100">
                          <div className="card-hover-2-title">
                            <h5 className="fs-4 mb-2">{card.title}</h5>
                          </div>
                          <p className="mb-0">{card.summary ? null : null}</p>
                        </div>
                        <div className="card-hover-2-footer w-100 mt-auto">
                          <a href={`${baseUrl}/${card.id}`}>
                            <span className="card-hover-2-footer-link">
                              <span>Read more</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogListCom;
