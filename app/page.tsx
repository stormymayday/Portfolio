import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import FeaturedProjects from "@/components/FeaturedProjects";
import { fetchProjects } from "@/utils/fetchProjects";
export default async function Home() {
    const projects = await fetchProjects();
    console.log(projects);

    return (
        <main>
            <Layout>
                <Hero />
                <Jobs />
                <FeaturedProjects
                    projects={projects}
                    title="featured projects"
                />
            </Layout>
        </main>
    );
}
