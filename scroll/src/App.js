import React, { useRef, useEffect } from 'react';

function App() {
  const copyrightYear = new Date().getFullYear();
  const links = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    { name: 'services', href: '#services' },
    { name: 'tours', href: '#tours' }
  ];
  const navbarRef = useRef(null);
  const linksContainerRef = useRef(null);
  const topLinkRef = useRef(null);
  const linksRef = useRef(null);

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const toursRef = useRef(null);

  const blocks = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    tours: toursRef,
  };

  function navBarToggleHandler() {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    const containerHeight = linksContainerRef.current.getBoundingClientRect().height;
    linksContainerRef.current.style.height = (containerHeight === 0) ? `${linksHeight}px` : 0;
  }

  function scrollLinksClickHandlers(e, href) {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = href.slice(1);
    const element = blocks[id].current;

    const navHeight = navbarRef.current.getBoundingClientRect().height;
    const containerHeight = linksContainerRef.current.getBoundingClientRect().height;
    const fixedNav = navbarRef.current.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainerRef.current.style.height = 0;
  }

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      const scrollHeight = window.pageYOffset;
      const navHeight = navbarRef.current.getBoundingClientRect().height;
      if (scrollHeight > navHeight) {
        navbarRef.current.classList.add("fixed-nav");
      } else {
        navbarRef.current.classList.remove("fixed-nav");
      }
      // setup back to top link

      if (scrollHeight > 500) {
        topLinkRef.current.classList.add("show-link");
      } else {
        topLinkRef.current.classList.remove("show-link");
      }
    });
    return () => { };
  }, []);

  return (
    <div className="App">
      <header id="home" ref={homeRef}>
        <nav id="nav" ref={navbarRef}>
          <div className="nav-center">
            <div className="nav-header">
              <img src="./logo.png" className="logo" alt="logo" />
              <button className="nav-toggle" onClick={navBarToggleHandler}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div className="links-container" ref={linksContainerRef}>
              <ul className="links" ref={linksRef}>
                {links.map(link =>
                  (<li key={link.href}>
                    <a href={link.href} className="scroll-link" onClick={(e) => scrollLinksClickHandlers(e, link.href)}>{link.name}</a>
                  </li>)
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div className="banner">
          <div className="container">
            <h1>scroll project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eos
              neque sunt in? Id, necessitatibus quos quisquam distinctio
              laudantium fugiat?
          </p>
            <a href="#tours" className="scroll-link btn btn-white">explore tours</a>
          </div>
        </div>
      </header>
      <section id="about" className="section" ref={aboutRef}>
        <div className="title">
          <h2>about <span>us</span></h2>
        </div>
      </section>
      <section id="services" className="section" ref={servicesRef}>
        <div className="title">
          <h2>our <span>services</span></h2>
        </div>
      </section>
      <section id="tours" className="section" ref={toursRef}>
        <div className="title">
          <h2>featured <span>tours</span></h2>
        </div>
      </section>
      <footer className="section">
        <p>
          copyright &copy; backroads travel tours company
          <span id="date">{copyrightYear}</span>. all rights reserved
      </p>
      </footer>
      <a className="scroll-link top-link" href="#home" ref={topLinkRef} onClick={(e) => scrollLinksClickHandlers(e, '#home')}>
        <i className="fas fa-arrow-up"></i>
      </a>
    </div >
  );
}

export default App;
