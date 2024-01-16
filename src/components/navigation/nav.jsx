import * as React from "react";

const pages = [
  {
    name: "Home",
    loc: "/",
  },
  {
    name: "Projects",
    loc: "/projects",
  },
  {
    name: "Blog",
    loc: "/blog",
  },
];

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container position-relative">
            <a className="navbar-brand" href="/">
               <span>Taylor Googe</span>
            </a>

            <div className="d-flex align-items-center navbar-no-collapse-items order-lg-last">
                <button className="navbar-toggler order-last" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar-demo-1" aria-controls="navbar-demo-1" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i></i>
                    </span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbar-demo-1">
                <ul className="navbar-nav ms-auto">
                  {pages.map((p, index) => (
                  <li key={index} className="nav-item me-3">
                      <a href={p.loc} className="nav-link">{p.name}</a>
                  </li>
                  
                  ))}
                   
                </ul>
            </div>
        </div>
    </nav>
  );
 
}
export default Nav;
