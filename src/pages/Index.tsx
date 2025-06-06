import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Index: React.FC = () => {
  return (
    <>
      <main className="flex-shrink-0 index-page">
        <Navbar />
        <Header />
        {/* About Section */}
        <section className="bg-light py-5">
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xxl-8">
                <div className="text-center">
                  <h2 className="display-5 fw-bolder"><span className="text-gradient d-inline">About Me</span></h2>
                  <p className="lead fw-light mb-4">My name is Start Bootstrap and I help brands grow.</p>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?</p>
                  <div className="d-flex justify-content-center fs-2 gap-4">
                    <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                    <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                    <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index; 