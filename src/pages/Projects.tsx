import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Projects: React.FC = () => {
  return (
    <>
      <main className="flex-shrink-0 projects-page">
        <Navbar />
        {/* Projects Section */}
        <section className="py-15">
          <div className="container px-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Projects</span></h1>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-11 col-xl-9 col-xxl-8">
                {/* Project One */}
                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">Project One</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem optio assumenda porro ut exercitationem quaerat in velit, veritatis qui, dolorum consequuntur facilis dolores dignissimos nemo? Explicabo harum, provident aut consequatur cumque odit quaerat, tempora, qui excepturi ipsum voluptatibus quas soluta.</p>
                      </div>
                      <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                    </div>
                  </div>
                </div>
                {/* Project Two */}
                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">Project Two</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem optio assumenda porro ut exercitationem quaerat in velit, veritatis qui, dolorum consequuntur facilis dolores dignissimos nemo? Explicabo harum, provident aut consequatur cumque odit quaerat, tempora, qui excepturi ipsum voluptatibus quas soluta.</p>
                      </div>
                      <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                    </div>
                  </div>
                </div>
                {/* Project Three */}
                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">Project Three</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem optio assumenda porro ut exercitationem quaerat in velit, veritatis qui, dolorum consequuntur facilis dolores dignissimos nemo? Explicabo harum, provident aut consequatur cumque odit quaerat, tempora, qui excepturi ipsum voluptatibus quas soluta.</p>
                      </div>
                      <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                    </div>
                  </div>
                </div>
                {/* Project Four */}
                <div className="card overflow-hidden shadow rounded-4 border-0">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center">
                      <div className="p-5">
                        <h2 className="fw-bolder">Project Four</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem optio assumenda porro ut exercitationem quaerat in velit, veritatis qui, dolorum consequuntur facilis dolores dignissimos nemo? Explicabo harum, provident aut consequatur cumque odit quaerat, tempora, qui excepturi ipsum voluptatibus quas soluta.</p>
                      </div>
                      <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call to action section */}
        <section className="py-5 bg-gradient-primary-to-secondary text-white">
          <div className="container px-5 text-center">
            <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
            <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="/contact">Contact me</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects; 