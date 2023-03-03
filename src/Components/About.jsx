import React from "react";
const About = () => {
  return (
    <>
      <header id="home" className="header">
        <section className="section pt-0" id="about">
          <div className="container text-center">
            <div className="about">
              <div className="about-img-holder">
                <img
                  src={require("../assets/imgs/man.png")}
                  className="about-img"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                />
              </div>
              <div className="about-caption">
                <p className="section-subtitle text-primary font-weight-bold">
                  Who Am I ?
                </p>
                <h2 className="section-title mb-3">About Me</h2>
                <p className="text-primary font-weight-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repudiandae aliquid ad provident aut fuga animi soluta quae
                  eos non cupiditate voluptates dolorem, doloremque quos dicta
                  quibusdam impedit iure nemo a iste
                  <br />
                  culpa! Quasi quibusdam hic recusandae delectus velit officiis
                  explicabo voluptatibus! Nemo esse similique, voluptates labore
                  distinctio, placeat explicabo facilis molestias, blanditiis
                  culpa iusto voluptatem ratione eligendi a, quia temporibus
                  velit vero ipsa sint ex voluptatum expedita aliquid! Debitis,
                  nam!
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};
export default About;
