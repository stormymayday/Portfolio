import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Error = () => {
    return (
        <Layout>
            <main className="error-page">
                <div className="error-container">
                    <h1>oops it&apos;s a dead end</h1>
                    <Link href="/" className="btn">
                        back home
                    </Link>
                </div>
            </main>
        </Layout>
    );
};

export default Error;
