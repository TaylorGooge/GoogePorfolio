import Nav from "../components/navigation/nav";
import About from "../components/about";

import Contact from "../components/contact/Contact";

function Home() {
  return (
    <>
      <Nav />
      <main>
        <About />
      </main>

      <Contact />
    </>
  );
}
export default Home;
