import Image from "next/image";
import heroSvg from "@/public/hero.svg";

const Hero = () => {
    return (
        <header className="hero">
            <div className="section-center hero-center">
                <article className="hero-info">
                    <div className="underline"></div>
                    <h1>i&apos;m aidar</h1>
                    <h4>software engineer</h4>
                    <a href="contact.html" className="btn hero-btn">
                        contact me
                    </a>

                    <ul className="social-icons hero-icons">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/aidar-assylbekov/"
                                className="social-icon"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://github.com/stormymayday"
                                className="social-icon"
                                target="_blank"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </article>

                <article className="hero-img">
                    <Image
                        src={heroSvg}
                        alt="Developer illustration"
                        width={500}
                        height={500}
                        className="hero-photo"
                    />
                </article>
            </div>
        </header>
    );
};

export default Hero;
