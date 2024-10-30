import { StaticImageData } from 'next/image';

export type desc = {
    src: StaticImageData;
    alt: string;
    point1: {title: string; description: string }
    point2: {title: string; description: string }
    point3: {title: string; description: string }
}