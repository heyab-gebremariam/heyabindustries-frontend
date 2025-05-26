import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetchProjects();
        setProjects(response.data);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

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
                {loading && <div className="text-center">Loading projects...</div>}
                {error && <div className="text-center text-danger">{error}</div>}
                {!loading && !error && projects.map((project) => (
                  <div key={project.id} className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                    <div className="card-body p-0">
                      <div className="d-flex align-items-center">
                        <div className="p-5">
                          <h2 className="fw-bolder">{project.Title}</h2>
                          <p>{project.Description}</p>
                        </div>
                        <img className="img-fluid" src="https://dummyimage.com/300x400/343a40/6c757d" alt={project.Title} />
                      </div>
                    </div>
                  </div>
                ))}
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