import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(value: unknown) {
    if (typeof value === 'string') {
        return value;
    }

    if (value && typeof value === 'object' && 'toString' in value) {
        return String(value);
    }

    return '';
}