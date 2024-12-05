import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Image from "next/image";
import { aboutData } from "@/constants/about";

const About = () => {
    const { info, stack, title, image } = aboutData[0];

    return (
        <Layout>
            <section className="about-page">
                <div className="section-center about-center">
                    <div className="about-img">
                        <Image
                            src={image.url}
                            alt="About Image"
                            width={500}
                            height={500}
                            layout="intrinsic"
                        />
                    </div>
                    <article className="about-text">
                        <Title title={title} />
                        <p>{info}</p>
                        <div className="about-stack">
                            {stack.map((item) => (
                                <span key={item.id}>{item.title}</span>
                            ))}
                        </div>
                    </article>
                </div>
            </section>
        </Layout>
    );
};

export default About;
