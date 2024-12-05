export interface JobDescription {
    id: number;
    name: string;
}

export interface Job {
    id: number;
    company: string;
    date: string;
    position: string;
    desc: JobDescription[];
}

const jobsData: Job[] = [
    {
        id: 1,
        // company: "International Development Enterprises",
        company: "iDE Global",
        date: "Apr 2021 - Apr 2023",
        position: "Software Engineer",
        desc: [
            {
                id: 1,
                name: "Overhauled the Blockchain Coffee Beans application by leveraging React.js and Node.js with GraphQL, improving scalability, performance, and user engagement.",
            },
            {
                id: 2,
                name: "Engineered system integration between Kiva and Salesforce using REST APIs, streamlining data exchange and boosting operational efficiency",
            },
            {
                id: 3,
                name: "Designed and developed custom Salesforce UIs using Lightning Web Components (LWC) and Aura, enhancing user experience and application functionality",
            },
            {
                id: 4,
                name: "Automated workflows and developed applications on the Salesforce platform using Apex and Flow Builder, reducing manual workload and enhancing cross-team productivity",
            },
        ],
    },
    {
        id: 2,
        // company: "International Development Enterprises",
        company: "iDE Global",
        date: "Aug 2020 - Mar 2021",
        position: "Software Engineer Intern",
        desc: [
            {
                id: 1,
                name: "Designed and developed an application for the Blockchain Coffee Beans project using HTML, CSS, JavaScript, and Node.js, boosting 2020 revenue for participating coffee farmers by 36%, contributing to their economic sustainability",
            },
            {
                id: 2,
                name: "Built an employee intranet site on Salesforce Experience Cloud, which improved internal communication and team collaboration by streamlining information sharing and reducing email traffic",
            },
            {
                id: 3,
                name: "Collaborated in the design and implementation of custom Salesforce applications using Apex and Lightning Web Components (LWC), delivering improved functionality and an optimized user experience",
            },
        ],
    },
    {
        id: 3,
        company: "KRAS",
        date: "Feb 2018 - Sep 2018",
        position: "Web Developer",
        desc: [
            {
                id: 1,
                name: "Translated Photoshop PSDs into responsive HTML, CSS and JavaScript, creating visually appealing and user-friendly web pages",
            },
            {
                id: 2,
                name: "Refactored and maintained the company website’s user interface, enhancing performance and usability",
            },
            {
                id: 3,
                name: "Customized WordPress themes and components using PHP, JavaScript, and CSS, aligning with client specifications to enhance functionality and aesthetics",
            },
        ],
    },
    {
        id: 4,
        company: "KRAS",
        date: "Jul 2017 - Jan 2018",
        position: "Web Developer Intern",
        desc: [
            {
                id: 1,
                name: "Developed and maintained the company website using HTML, CSS, and JavaScript, ensuring optimal functionality and a seamless user experience, which increased user engagement",
            },
            {
                id: 2,
                name: "Enhanced accessibility by making the website mobile-friendly, resulting in a significant increase in traffic",
            },
            {
                id: 3,
                name: "Optimized performance by reducing the size of static assets through image compression, code minification, and bundling with Webpack, improving loading times and overall site efficiency",
            },
        ],
    },
];

export default jobsData;
