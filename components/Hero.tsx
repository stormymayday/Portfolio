import Image from "next/image";
import heroSvg from "@/public/hero.svg";
import SocialLinks from "@/constants/socialLinks";
import Link from "next/link";

const Hero = () => {
    return (
        <header className="hero">
            <div className="section-center hero-center">
                <article className="hero-info">
                    <div className="underline"></div>
                    <h1>i&apos;m aidar</h1>
                    <h4>software engineer</h4>
                    <Link href="/contact">
                        <button className="btn hero-btn">contact me</button>
                    </Link>
                    <SocialLinks />
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
