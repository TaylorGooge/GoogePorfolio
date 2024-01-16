import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/navigation/nav";

import { blogPost } from "../api";

const paperStyle = {
  padding: 20,
  marginTop: 10,
  marginBottom: 10,
  height: 700,
  overflowY: "auto",
};

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    getPostContent();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const getPostContent = async () => {
    let post = await blogPost(slug);
    setContent(post);
  };

  return (
    <>
      <Nav />
      {content && (
        <>
          <section id="article-header" className="position-relative">
            <div className="container pt-14 pb-9 pb-lg-11 position-relative">
              <article className="row pt-lg-7 pb-11">
                <div className="col-lg-10 col-xl-8">
                  <div className="position-relative pb-3 pb-lg-0">
                    <div className="d-flex align-items-center w-100">
                      {/* <a href="#!" className="badge bg-primary rounded-pill me-3">Tech</a> */}
                      <small className="text-body-secondary">
                        {" "}
                        {formatDate(content.created)}
                      </small>
                    </div>

                    <div>
                      <h2 className="my-4 display-4">{content.title}</h2>
                      <div className="d-flex pt-2 mb-0 small align-items-center">
                        
                        <span className="text-body-secondary d-inline-block">
                          By: 
                          {content.author.first_name} {content.author.last_name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section className="position-relative border-bottom">
            <div className="container pb-9 pb-lg-11">
              <img
                src={content.featured_image}
                alt={content.featured_image_alt}
                className="img-fluid shadow-lg rounded-4 mb-7 mb-lg-9 position-relative mt-n14"
              />

              <div className="row">
                <div className="col-xl-9 mx-auto">
                  <article
                    className="article mb-9"
                    dangerouslySetInnerHTML={{ __html: content.body }}
                  ></article>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

    
    </>
  );
};

export default BlogPost;
