import Image from 'next/image'
import { desc } from '../interfaces/desc'

export default function Feature({ src, alt, point1, point2, point3 }: desc) {
    return (
        <div className='flex flex-col w-fit mx-auto'>

            <div className='relative w-full p-2'>
                <div className="absolute -inset-2 w-full">
                    <div
                        className="h-full w-full opacity-40 blur-2xl bg-spindle-100">
                    </div>
                </div>
                <Image
                    src={src}
                    alt={alt}
                    width={1440}
                    height={1024}
                    className='relative rounded-xl w-[60rem] mx-auto'
                    priority
                />
            </div>

            <dl className='mx-auto text-center flex flex-col sm:flex-row justify-between max-w-[60rem] grid-cols-3 gap-2 mt-5 text-sm sm:text-base'>
                <div className='col-span-1 w-full text-balance'>
                    <dt className='inline font-medium'>{point1.title} </dt>
                    <dd className='inline font-light'>{point1.description}</dd>
                </div>
                <div className='col-span-1 w-full text-balance'>
                    <dt className='inline font-medium'>{point2.title} </dt>
                    <dd className='inline font-light'>{point2.description}</dd>
                </div>
                <div className='col-span-1 w-full text-balance'>
                    <dt className='inline font-medium'>{point3.title} </dt>
                    <dd className='inline font-light'>{point3.description}</dd>
                </div>
            </dl>
        </div>

    )

}