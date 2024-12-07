import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Jobs from "@/components/Jobs";
import FeaturedProjects from "@/components/FeaturedProjects";
import { fetchProjects } from "@/utils/fetchProjects";
export default async function Home() {
    const projects = await fetchProjects();
    const featuredProjects = projects.filter((project) => {
        return project.featured === true;
    });

    return (
        <main>
            <Layout>
                <Hero />
                <Jobs />
                {featuredProjects.length > 0 && (
                    <FeaturedProjects
                        projects={featuredProjects}
                        title="featured projects"
                    />
                )}
            </Layout>
        </main>
    );
}
