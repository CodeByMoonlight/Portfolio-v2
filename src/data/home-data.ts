import {
    BrainIcon,
    CodeIcon,
    DatabaseIcon,
    LayoutGridIcon,
    ShieldCheckIcon,
    ToolIcon,
} from '@/components/icons';

export type AboutCardVariant = 'purple' | 'pink' | 'yellow' | 'green' | 'blue' | 'red';

export type AboutCardData = {
    title: string;
    description: string;
    technologies: string[];
    variant: AboutCardVariant;
    icon: typeof DatabaseIcon;
};

export type ProjectCardData = {
    title: string;
    description: string;
    technologies: string[];
    imageSrc: string;
    githubLink?: string;
    liveLink?: string;
};

export const aboutCards: AboutCardData[] = [
    {
        title: 'Languages',
        description: 'Developed scalable academic and personal projects by solving logic-based problems and delivering functional systems within deadlines.',
        technologies: ['Java', 'Python', 'JavaScript', 'TypeScript', 'PHP'],
        variant: 'purple',
        icon: CodeIcon,
    },
    {
        title: 'Frontend',
        description: 'Built responsive and accessible interfaces that improved usability across desktop and mobile platforms during project development.',
        technologies: ['HTML', 'CSS', 'React', 'Next.js'],
        variant: 'pink',
        icon: BrainIcon,
    },
    {
        title: 'Backend',
        description: 'Implemented reliable server-side features to manage data processing and support scalable application performance.',
        technologies: ['Laravel', 'Express'],
        variant: 'yellow',
        icon: LayoutGridIcon,
    },
    {
        title: 'Database',
        description: 'Organized and maintained structured records while optimizing queries for faster and more reliable data handling.',
        technologies: ['MySQL', 'SQLite', 'phpMyAdmin'],
        variant: 'purple',
        icon: DatabaseIcon,
    },
    {
        title: 'Tools',
        description: 'Streamlined development workflows through efficient collaboration, testing, and deployment practices during project completion.',
        technologies: ['Git', 'VS Code', 'Figma', 'Postman', 'REST API'],
        variant: 'pink',
        icon: ToolIcon,
    },
    {
        title: 'Design',
        description: 'Created polished layouts and visual assets that strengthened branding and improved user-focused design presentations.',
        technologies: ['Adobe Illustrator', 'Adobe Photoshop'],
        variant: 'yellow',
        icon: ShieldCheckIcon,
    },
];

export const projectCards: ProjectCardData[] = [
    {
        title: 'FraudSite',
        description: "Developed a Laravel and TypeScript cybersecurity platform featuring a scan-integrated public site and a 7-module RBAC admin system with complete server and client-side data controls.",
        technologies: ['Laravel', 'React', 'TypeScript', 'Tailwind CSS'],
        imageSrc: '/public/fraudsite-pic.png',
        // githubLink: 'https://github.com/user/project1',
        // liveLink: 'https://project1.com',
    },
    {
        title: 'Internal Quality Audit System',
        description: "Developed a Laravel and React system to digitalize a university’s quality audit workflow. Built core audit modules, designed the database, stress-tested for 150+ concurrent users, along with its documentation.",
        technologies: ['Laravel', 'React', 'TypeScript', 'Tailwind CSS'],
        imageSrc: '/public/iqas-pic.png',
    },
    {
        title: 'Pet Adoption',
        description: "Built a Next.js and Prisma ORM adoption platform handling 40+ animal records. Implemented CRUD operations, adoption/review workflows, and a responsive UI with scroll animations.",
        technologies: ['Next.js', 'Prisma', 'Tailwind CSS'],
        imageSrc: '/public/pet-adoption-pic.png',
        githubLink: 'https://github.com/CodeByMoonlight/Pet-Adoption-Website',
        liveLink: 'https://pet-adoption-website-bd2x75v0s-codebymoonlights-projects.vercel.app/',
    },
    {
        title: 'Pokemon Pokédex',
        description: 'Built a React and Express Pokemon platform that delivers a main page, Pokédex, and memory game using a public API. Users can open each card to view details, making it a focused and engaging experience.',
        technologies: ['React', 'Express', 'Tailwind CSS'],
        imageSrc: '/public/pokemon-pic.png',
        githubLink: 'https://github.com/CodeByMoonlight/Pokemon-Website-API-Frontend',
        liveLink: 'https://pokemon-website-api-frontend.vercel.app/',
    },
    {
        title: 'InfoSec Research-based Blog',
        description: 'Created a Laravel and React research-based blog that organizes cyber threat and safe browsing resources into a main library and detailed reading view. It includes references, a table of contents, and a progress bar.',
         technologies: ['Laravel', 'React', 'TypeScript', 'Tailwind CSS'],
        imageSrc: '/public/blog-pic.png',
        // githubLink: 'https://github.com/user/project1',
        // liveLink: 'https://project1.com',
    },
    {
        title: 'Animal Memory Game',
        description: 'Built a simple HTML, CSS, and JavaScript memory game with 8 animal cards, giving players 16 total cards to match in a cute stamp-inspired layout. The game is designed to be quick, easy, and fun to revisit anytime.',
        technologies: ['JavaScript', 'CSS'],
        imageSrc: '/public/memory-game-pic.png',
        githubLink: 'https://github.com/CodeByMoonlight/Animal-Memory-Game',
        liveLink: 'https://codebymoonlight.github.io/Animal-Memory-Game/',
    },
];
