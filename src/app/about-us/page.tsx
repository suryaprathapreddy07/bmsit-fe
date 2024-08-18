'use client';
import Navbar from '../components/Navbar';

const AboutUsPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar  />
      <div
        className="relative  bg-cover bg-center mt-10 h-[100vh] w-full"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/p/AF1QipMiC_0JwKzrienIsZ9JvfVeeyYLbeZoLlbjO_ZI=s1360-w1360-h1020')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <div className='flex flex-col gap-8'>
            <h1 className="text-white text-5xl text-center font-medium">ABOUT US</h1>
            <h1 className="text-white text-[20px] space-x-1 px-4 font-thin text-center">B.M.S. Institute Of Technology (Autonomous) Is A Private Engineering College In Yelahanka, Bangalore, India.
            It Was Started In 2002 By Bhusanayana Mukundadas Sreenivasaiah Institute Of Technology (BMSIT) And Is Run By The B.M.S. Educational Trust. It Is Affiliated With Visvesvaraya Technological University And Became Autonomous In 2020.</h1>
            
            </div>
         
          
        </div>
      </div>
      <div>some txt</div>
      <section className="services-offered" id="services-offered-div">
      <div className="services">
        <div className="container headings text-center">
          <h1 className="text-center font-weight-bold text-uppercase">BMSIT&M</h1>
          <p className="text-center text-capitalize">
            BMS Institute of Technology and Management
          </p>
        </div>
        <br />

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 service-div">
              <div className="row">
                <div className="col-lg-2 col-2 service-icons"></div>
                <div className="col-lg-10 col-10">
                  <h2></h2>
                  <p>
                    <img id="preview" className="img-fluid img-thumbnail" src="" alt="preview" />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i className="fa-3x fa fa-building-o" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <h2></h2>
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      BMSIT&M was founded by B S Narayana, son of educationist B M Sreenivasaiah,
                      and is managed by the B M S Educational Trust. It is the sister institution of B M S College of Engineering,
                      a well-established government-aided engineering college in India. B.M.S. Institute of Technology is recognized as a research centre by Visvesvaraya Technological University.
                      And Autonomous in 2020 Initially, starting out with Eight disciplines of engineering, And Four Disciplines of Masters Degree.
                      The college was granted the status of a Research Institution by the Visvesvaraya Technological University in 2005.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-12 service-div">
              <br />
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#4169E1" }} className="fa-2x fa fa-globe" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <h2></h2>
                  <p>
                    <a href="https://bmsit.ac.in/" target="_blank" rel="noopener noreferrer">bmsit.ac.in</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#ff0000" }} className="fa-2x fa fa-envelope-o" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <h2></h2>
                  <p>
                    <a href="principal@bmsit.in">principal@bmsit.in</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#87ceff" }} className="fa-2x fa fa-twitter-square" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <h2></h2>
                  <p>
                    <a href="https://twitter.com/bms-institute-of-technology-and-management" target="_blank" rel="noopener noreferrer">bmsit_blr</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#00008B" }} className="fa-2x fa fa-facebook-official" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <h2></h2>
                  <p>
                    <a href="https://www.facebook.com/bmsit/" target="_blank" rel="noopener noreferrer">bmsit_blr</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#e75480" }} className="fa-2x fa fa-instagram" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <h2></h2>
                  <p>
                    <a href="https://www.instagram.com/bmsit.official/?__d=1" target="_blank" rel="noopener noreferrer">bmsitofficial_blr</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#00008B" }} className="fa-2x fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <h2></h2>
                  <p>
                    <a href="https://www.linkedin.com/school/bms-institute-of-technology-and-management/" target="_blank" rel="noopener noreferrer">bmsit_blr</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#ff0000" }} className="fa-2x fa fa-youtube-play" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <h2></h2>
                  <p>
                    <a href="https://www.youtube.com/@bmsitmedia8115" target="_blank" rel="noopener noreferrer">bmsit_blr</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-2 service-icons">
                  <i style={{ color: "#ff0000" }} className="fa-2x fa fa-google-plus-square" aria-hidden="true"></i>
                </div>
                <div className="col-lg-10 col-10">
                  <h2></h2>
                  <p>
                    <a href="https://www.google.com/search?q=bmsit" target="_blank" rel="noopener noreferrer">bmsit_blr</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
    
  );
};

export default AboutUsPage;
