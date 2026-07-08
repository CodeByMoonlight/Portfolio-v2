import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { useId, useMemo } from 'react';

import { Badge } from '@/components/ui/badge';

const pillClasses = [
    'bg-home-purple/20 text-home-dark-purple',
    'bg-home-pink/20 text-home-dark-pink',
    'bg-home-yellow/20 text-home-dark-orange',
    'bg-home-dark-green/12 text-home-dark-green',
    'bg-home-orange/20 text-home-dark-orange',
];

const hashSeed = (value: string) => {
    let hash = 0;

    for (let i = 0; i < value.length; i++) {
        hash = (hash << 5) - hash + value.charCodeAt(i);
        hash |= 0;
    }

    return hash >>> 0;
};

const createSeededRandom = (seed: number) => {
    let state = seed || 1;

    return () => {
        state = (state * 1664525 + 1013904223) % 4294967296;

        return state / 4294967296;
    };
};

const shuffleWithSeed = (items: string[], seed: string) => {
    const rng = createSeededRandom(hashSeed(seed));
    const result = [...items];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
};

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    imageSrc: string;
    githubLink?: string;
    liveLink?: string;
}

export function ProjectCard({
    title,
    description,
    technologies,
    imageSrc,
    githubLink,
    liveLink,
}: ProjectCardProps) {
    const instanceId = useId();
    const shuffledPills = useMemo(
        () => shuffleWithSeed(pillClasses, instanceId),
        [instanceId],
    );

    return (
        <div className="flex w-full flex-col gap-2 rounded-[34px] bg-white p-6 ring-2 ring-gray-200/70 drop-shadow-xs transition-all duration-300 hover:scale-105 hover:ring-home-purple/70 hover:drop-shadow-lg">
            <div className="flex h-50 justify-center">
                <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full rounded-xl border bg-gray-100 object-cover shadow-xs"
                />
            </div>
            <span className="mt-2 flex min-h-9.5 flex-row items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800/94">{title}</h3>
                <span className="flex flex-row gap-2">
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-gray-200 bg-gray-100/70 p-2 text-gray-800/90 transition-colors duration-300 hover:bg-gray-200/80"
                        >
                            <IconBrandGithub size={20} stroke={2} />
                        </a>
                    )}
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-gray-200 bg-gray-100/70 p-2 text-gray-800/90 transition-colors duration-300 hover:bg-gray-200/80"
                        >
                            <IconExternalLink size={20} stroke={2} />
                        </a>
                    )}
                </span>
            </span>
            <p className="leading-7 text-gray-700">{description}</p>
            <span className="w-fill mt-6 flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                    <Badge
                        key={`${tech}-${index}`}
                        variant="default"
                        className={shuffledPills[index % shuffledPills.length]}
                    >
                        {tech}
                    </Badge>
                ))}
            </span>
        </div>
    );
}
