import { getImageProps } from 'next/image'

interface ThemedImageProps {
    alt: string;
    lightSrc: string;
    darkSrc: string;
}

export default function ThemedImage({ alt, lightSrc, darkSrc }: Readonly<ThemedImageProps>) {
    const common = { alt: alt, fill: true }
    const {
        props: { srcSet: dark },
    } = getImageProps({ ...common, src: darkSrc })
    const {
        props: { srcSet: light, ...rest },
    } = getImageProps({ ...common, src: lightSrc })

    return (
        <picture>
            <source media="(prefers-color-scheme: dark)" srcSet={dark} />
            <source media="(prefers-color-scheme: light)" srcSet={light} />
            <img {...rest} />
        </picture>

    )
}