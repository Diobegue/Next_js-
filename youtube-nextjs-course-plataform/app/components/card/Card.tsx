import Link from 'next/link'
import Image from 'next/image'

export interface IcardProps {
    href: string;
    image: string;
    title: string;
    description: string;
    
}

export const Card = ({title, description, image, href}: IcardProps) => {

    return (
        <Link href={href} className='hover:no-underline'>
            <article className='flex gap-2 flex-col p-2 rounded sm:hover:bg-(--color-primary) '>
                <Image
                    width={1000} height={0}
                    src={image}
                    alt={title}
                    draggable={false}
                    className='aspect-video object-cover rounded-2xl'
                />
                <h4 className='font-extrabold text '>{title}</h4>

                <p className='line-clamp-3 sm:line-clamp-4 md:line-clamp-5 hover:no-underline'>{description}</p>

            </article>
        </Link>
    )
}