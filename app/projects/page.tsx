import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Project from "@/components/Project";
import { fetchProjects } from "@/utils/fetchProjects";

const Projects = async () => {
    const projects = await fetchProjects();
    console.log(projects);
    return (
        <Layout>
            <header className="projects-hero">
                <Title title="my projects" />
            </header>

            <section className="section">
                <div className="section-center projects-page-center">
                    {projects.map((project, index) => (
                        <Project key={index} project={project} />
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Projects;
