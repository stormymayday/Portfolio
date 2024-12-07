export type ProjectType = {
    id: string;
    title: string;
    description: string;
    image: {
        url: string;
        width: number;
        height: number;
    };
    githubUrl: string;
    liveUrl: string;
    stack: string[];
    featured: boolean;
};
