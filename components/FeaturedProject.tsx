import Image from "next/image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { ProjectType } from "@/types";

interface ProjectProps {
    index: number;
    project: ProjectType;
}

const Project = ({ index, project }: ProjectProps) => {
    const { image, title, description, stack, githubUrl, liveUrl } = project;
    return (
        <article className="project">
            {image && (
                <a
                    href={liveUrl}
                    target="_blank"
                    className="featured-project-img-wrapper"
                >
                    <Image
                        src={`https:${image.url}`}
                        alt={title}
                        width={image.width}
                        height={image.height}
                        className="featured-project-img"
                    />
                </a>
            )}
            <div className="project-info">
                <span className="project-number">0{index + 1}.</span>
                <h3>{title}</h3>
                <p className="project-desc">{description}</p>
                <div className="featured-project-stack ">
                    {stack.map((item, index) => {
                        return <span key={index}>{item}</span>;
                    })}
                </div>
                <div className="project-links">
                    <a href={githubUrl} target="_blank">
                        <FaGithubSquare className="featured-project-icon" />
                    </a>
                    <a href={liveUrl} target="_blank">
                        <FaShareSquare className="featured-project-icon" />
                    </a>
                </div>
            </div>
        </article>
    );
};

export default Project;
