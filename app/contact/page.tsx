import Layout from "@/components/Layout";

const Contact = () => {
    return (
        <Layout>
            <section className="contact-page">
                <article className="contact-form">
                    <h3>get in touch</h3>
                    <form action="https://formspree.io/xleppovg" method="POST">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                maxLength={50}
                                placeholder="name"
                                className="form-control"
                            />
                            <input
                                type="email"
                                name="email"
                                maxLength={50}
                                placeholder="email"
                                className="form-control"
                            />
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="message"
                                maxLength={500}
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

export default Contact;
