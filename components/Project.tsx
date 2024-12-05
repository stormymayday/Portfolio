import Image, { StaticImageData } from "next/image";
import { FaHome } from "react-icons/fa";

interface ProjectProps {
    project: {
        title: string;
        description: string;
        stack: string[];
        imageUrl: StaticImageData;
        demoUrl: string;
        githubUrl: string;
    };
}

const Project = ({ project }: ProjectProps) => {
    const { title, description, stack, imageUrl, demoUrl, githubUrl } = project;

    return (
        <article className="single-project">
            <div className="project-container">
                <Image src={imageUrl} alt={title} width={500} height={300} />
                <a href={demoUrl} className="project-icon" target="_blank">
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
                    <a href={demoUrl} target="_blank">
                        <i className="fa-solid fa-share-from-square"></i>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default Project;
