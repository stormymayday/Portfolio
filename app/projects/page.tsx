import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Project from "@/components/Project";
import { projectsData } from "@/constants/projects";

const Projects = () => {
    return (
        <Layout>
            <header className="projects-hero">
                <Title title="my projects" />
            </header>

            <section className="section">
                <div className="section-center projects-page-center">
                    {projectsData.map((project, index) => (
                        <Project key={index} project={project} />
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Projects;
