import type { ComponentType } from 'react';

export type AppVariant = 'header' | 'sidebar';

export type BreadcrumbItem = {
    title: string;
    href?: string;
};

export type NavItem = {
    title: string;
    href: string;
    icon?: ComponentType<{ className?: string }>;
};

export type User = {
    name: string;
    email: string;
    avatar?: string | null;
};