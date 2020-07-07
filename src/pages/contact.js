import React from 'react';
import Layout from '../components/Layout';

const contact = () => {
	return (
		<Layout>
			<section className="contact-page">
				<article className="contact-form">
					<h3>get in touch</h3>
					<form action="https://formspree.io/xleppovg" method="POST">
						<div className="form-group">
							<input type="text" name="name" maxlength="50" placeholder="name" className="form-control" />
							<input
								type="email"
								name="email"
								maxlength="100"
								placeholder="email"
								className="form-control"
							/>
							<textarea
								name="message"
								rows="5"
								placeholder="message"
								maxlength="500"
								className="form-control"
							/>
						</div>
						<button type="submit" className="submit-btn btn">
							submit
						</button>
					</form>
				</article>
			</section>
		</Layout>
	);
};

export default contact;
