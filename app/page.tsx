import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
export default function Home() {
    return (
        <main>
            <Layout>
                <Hero />
                <Jobs />
            </Layout>
        </main>
    );
}
