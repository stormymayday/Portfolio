import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../constants/socialLinks';

const Hero = () => {
	return (
		<header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div>
						<div className="underline" />
						<h1>I'm Aidar</h1>
						<h4>Software Engineer</h4>
						<Link to="/contact" className="btn">
							Contact me
						</Link>
						<SocialLinks />
					</div>
				</article>
			</div>
		</header>
	);
};

export default Hero;
