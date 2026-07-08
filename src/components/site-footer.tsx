import {
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandX,
} from '@tabler/icons-react';

interface SiteFooterProps {
    onLogoClick?: () => void;
}

export function SiteFooter({ onLogoClick }: SiteFooterProps) {
    return (
        <footer className="grid w-full grid-cols-3 items-center justify-center bg-home-yellow/90 p-2">
            <span
                onClick={onLogoClick}
                className="col-start-1 flex h-8 w-8 items-center justify-center rounded-full border border-gray-800 p-1 font-serif text-sm font-semibold text-gray-800 uppercase transition-all duration-300 hover:cursor-pointer hover:border-home-dark-purple hover:bg-[#E3E6F7] hover:text-home-dark-purple hover:shadow-lg lg:h-10 lg:w-10 lg:p-2 lg:text-lg"
            >
                av
            </span>
            <span className="col-start-2 flex items-center justify-center gap-2 text-gray-800 lg:gap-4">
                <a
                    href="https://github.com/CodeByMoonlight"
                    className="cursor-pointer rounded-full border border-gray-800 bg-home-yellow p-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-home-dark-purple hover:bg-[#E3E6F7] hover:text-home-dark-purple hover:shadow-lg"
                >
                    <IconBrandGithub size={22} stroke={1.5} />
                </a>
                <a
                    href="https://www.linkedin.com/in/alijah-valle-313246357"
                    className="cursor-pointer rounded-full border border-gray-800 bg-home-yellow p-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-home-dark-purple hover:bg-[#E3E6F7] hover:text-home-dark-purple hover:shadow-lg"
                >
                    <IconBrandLinkedin size={22} stroke={1.5} />
                </a>
                <a
                    href="https://www.facebook.com/AlijahValle.AV"
                    className="cursor-pointer rounded-full border border-gray-800 bg-home-yellow p-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-home-dark-purple hover:bg-[#E3E6F7] hover:text-home-dark-purple hover:shadow-lg"
                >
                    <IconBrandFacebook size={22} stroke={1.5} />
                </a>
                <a
                    href="https://x.com/VA_ValleAlijah"
                    className="cursor-pointer rounded-full border border-gray-800 bg-home-yellow p-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-home-dark-purple hover:bg-[#E3E6F7] hover:text-home-dark-purple hover:shadow-lg"
                >
                    <IconBrandX size={22} stroke={1.5} />
                </a>
                <a
                    href="https://www.instagram.com/alijah_valle/"
                    className="cursor-pointer rounded-full border border-gray-800 bg-home-yellow p-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-home-dark-purple hover:bg-[#E3E6F7] hover:text-home-dark-purple hover:shadow-lg"
                >
                    <IconBrandInstagram size={22} stroke={1.5} />
                </a>
            </span>
            <span className="col-start-3 text-right text-sm text-gray-800">
                ©2026 All Rights Reserved.
            </span>
        </footer>
    );
}
