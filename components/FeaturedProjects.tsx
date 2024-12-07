import Title from "@/components/Title";
import Link from "next/link";
import FeaturedProject from "@/components/FeaturedProject";
import { ProjectType } from "@/types";

interface FeaturedProjectsProps {
    projects: ProjectType[];
    title: string;
}

const FeaturedProjects = ({ projects, title }: FeaturedProjectsProps) => {
    return (
        <section className="section projects">
            <Title title={title} />
            <div className="section-center projects-center">
                {projects.map((project, index) => {
                    return (
                        <FeaturedProject
                            key={project.id}
                            index={index}
                            project={project}
                        />
                    );
                })}
            </div>
            <Link href="/projects" className="btn center-btn">
                projects
            </Link>
        </section>
    );
};

export default FeaturedProjects;
