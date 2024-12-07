import { createClient } from "contentful";
import { ProjectType } from "@/types";

export async function fetchProjects() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID || "",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
    });

    try {
        const entries = await client.getEntries({
            content_type: "projects",
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const projects: ProjectType[] = entries.items.map((entry: any) => ({
            id: entry.sys.id,
            title: entry.fields.title as string,
            description: entry.fields.description as string,
            image: {
                url: entry.fields.image?.fields?.file?.url as string,
                width: entry.fields.image?.fields?.file?.details.image
                    .width as number,
                height: entry.fields.image?.fields?.file?.details.image
                    .height as number,
            },
            githubUrl: entry.fields.githubUrl as string,
            liveUrl: entry.fields.liveUrl as string,
            stack: entry.fields.stack as string[],
            featured: entry.fields.featured as boolean,
        }));

        return projects;
    } catch (error) {
        console.error("Error fetching Contentful data:", error);
        return [];
    }
}
