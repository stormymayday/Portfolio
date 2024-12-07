import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ProjectType } from "@/types";

interface ProjectProps {
    project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
    const { title, description, stack, image, liveUrl, githubUrl } = project;

    return (
        <article className="single-project">
            <div className="project-container">
                <a href={liveUrl} target="_blank">
                    <Image
                        src={`https:${image.url}`}
                        alt={title}
                        width={image.width}
                        height={image.height}
                    />
                </a>
                <a href={githubUrl} className="project-icon" target="_blank">
                    <FaGithub />
                </a>
            </div>
            <div className="project-details">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="project-stack">
                    {stack.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Project;
