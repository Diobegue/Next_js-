'use client';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Card, IcardProps } from '../card/Card';
import { useRef } from 'react';



//props que o componente recebe
interface ISectionProps {
    title: string;
    variant: "grid" | "h-list";
    items: IcardProps[];
}

//componente da sessão
export const Section = ({title, items, variant = "grid"}: ISectionProps) => {

    const scrollRef = useRef<HTMLUListElement>(null);
    const handleScroll = (scroll: number) => {
        const currentScroll = scrollRef.current?.scrollLeft || 0;
        scrollRef.current?.scrollTo({left:currentScroll + scroll, behavior: 'smooth'});
    }


    return (
        <section className="flex flex-col gap-4 px-4">
            <h2 className="font-bold text-xl">
                {title}
            </h2>

            <ul 
            ref={scrollRef}
            data-variant={variant}
            className="grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2  data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto">

                <button 
                onClick={() => handleScroll(-300)} 
                className='cursor-pointer h-14 w-14 bg-[var(--color-primary)] rounded-full flex items-center justify-center sticky left-0 my-auto -ml-14'
                >
                
                    <MdKeyboardArrowLeft size={32} />
                </button>

                {items.map(item => (
                    <li key={item.title} data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'>
                        <Card
                            href={item.href}
                            image={item.image}
                            title={item.title}
                            description={item.description}/>
                    </li>
                ))}

                <button 
                onClick={() => handleScroll(300)}
                className='cursor-pointer h-14 w-14 bg-[var(--color-primary)] rounded-full flex items-center justify-center sticky right-0 my-auto -ml-14'
                >
                    <MdKeyboardArrowRight size={32} />
                </button>
               
            </ul>
        </section>
    )
}