import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Resume: React.FC = () => {
  return (
    <>
      <main className="flex-shrink-0 resume-page">
        <Navbar />
        {/* Page Content */}
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              {/* Experience Section */}
              <section>
                <h2 className="text-secondary fw-bolder mb-4">Experience</h2>
                {/* Experience Card 1 */}
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-secondary fw-bolder mb-2">2019 - Present</div>
                          <div className="mb-2">Start Bootstrap</div>
                          <div className="small text-muted">Web Design & Development</div>
                        </div>
                      </div>
                      <div className="col-lg-8"><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem optio assumenda porro ut exercitationem quaerat in velit, veritatis qui, dolorum consequuntur facilis dolores dignissimos nemo? Explicabo harum, provident aut consequatur cumque odit quaerat, tempora, qui excepturi ipsum voluptatibus quas soluta.</div></div>
                    </div>
                  </div>
                </div>
                {/* Experience Card 2 */}
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-secondary fw-bolder mb-2">2017 - 2019</div>
                          <div className="mb-2">Blackrock</div>
                          <div className="small text-muted">Web Design & Development</div>
                        </div>
                      </div>
                      <div className="col-lg-8"><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem optio assumenda porro ut exercitationem quaerat in velit, veritatis qui, dolorum consequuntur facilis dolores dignissimos nemo? Explicabo harum, provident aut consequatur cumque odit quaerat, tempora, qui excepturi ipsum voluptatibus quas soluta.</div></div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Education Section */}
              <section>
                <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                {/* Education Card 1 */}
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-secondary fw-bolder mb-2">2015 - 2017</div>
                          <div className="mb-2">Harvard University</div>
                          <div className="small text-muted">Computer Science</div>
                        </div>
                      </div>
                      <div className="col-lg-8"><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem optio assumenda porro ut exercitationem quaerat in velit, veritatis qui, dolorum consequuntur facilis dolores dignissimos nemo? Explicabo harum, provident aut consequatur cumque odit quaerat, tempora, qui excepturi ipsum voluptatibus quas soluta.</div></div>
                    </div>
                  </div>
                </div>
                {/* Education Card 2 */}
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-secondary fw-bolder mb-2">2012 - 2015</div>
                          <div className="mb-2">University of California</div>
                          <div className="small text-muted">Computer Science</div>
                        </div>
                      </div>
                      <div className="col-lg-8"><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem optio assumenda porro ut exercitationem quaerat in velit, veritatis qui, dolorum consequuntur facilis dolores dignissimos nemo? Explicabo harum, provident aut consequatur cumque odit quaerat, tempora, qui excepturi ipsum voluptatibus quas soluta.</div></div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Divider */}
              <div className="pb-5"></div>
              {/* Skills Section */}
              <section>
                <h2 className="text-secondary fw-bolder mb-4">Skills</h2>
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    {/* Professional Skills List */}
                    <div className="mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                        <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span></h3>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">SEO/SEM Marketing</div></div>
                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Statistical Analysis</div></div>
                        <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div></div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Network Security</div></div>
                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Adobe Software Suite</div></div>
                        <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">User Interface Design</div></div>
                      </div>
                    </div>
                    {/* Languages List */}
                    <div className="mb-0">
                      <div className="d-flex align-items-center mb-4">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                        <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                        <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div></div>
                        <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Ruby</div></div>
                        <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resume; 