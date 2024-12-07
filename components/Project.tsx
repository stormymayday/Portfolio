import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { ProjectType } from "@/types";

interface ProjectProps {
    project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
    const { title, description, stack, image, liveUrl, githubUrl } = project;

    return (
        <article className="single-project">
            <div className="project-container">
                <Image
                    src={`https:${image.url}`}
                    alt={title}
                    width={image.width}
                    height={image.height}
                />
                <a href={liveUrl} className="project-icon" target="_blank">
                    <FaHome />
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
                <div className="project-footer">
                    <a href={githubUrl} target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={liveUrl} target="_blank">
                        <i className="fa-solid fa-share-from-square"></i>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default Project;
