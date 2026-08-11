'use client';
import Link from "next/link";
import { MdOpenInNew, MdMenu } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';



export const Header = () => {
    
    const [drawer, setDrawer] = useState(false);
    const currentPath = usePathname()

    const titles: Record<string, string> = {
        "/": "CodarSe - Página inicial",
        "/cursos": "CodarSe - todos os Cursos",
        "/sobre": "Sobre",
        "/contato": "Contato",
    };

    const title = titles[currentPath] ?? "CoderSe";

    useEffect(() => {
        setDrawer(false);
    }, [currentPath]);

    return (
        <nav className="flex items-center gap-4 justify-start md:justify-center bg-[var(--color-primary)] py-2 sm:py-4 px-6">
            
            <button className="sm:hidden" onClick={() => setDrawer(true)}>
                <MdMenu className="size-8"/>
            </button>
            <ul className="flex gap-4 list-none items-center" tabIndex={drawer ? -1 : undefined}>
                <li className='my-2'>
                    <Link href="/" className='border-2 rounded-md p-2 font-bold'>CODARSE</Link>
                </li>
                <li className="hidden sm:block">
                    <Link href="/" data-active={currentPath === '/'} className='data-[active=true]:underline'>Página inicial</Link>
                </li>
                <li  className="hidden sm:block">
                    <Link href="/cursos" data-active={currentPath === '/cursos'} className='data-[active=true]:underline'>Cursos</Link>
                </li>
                <li  className="hidden sm:block">
                    <Link href="https://blog.codarse.com" target="_blank" className='flex gap-1 items-center'>
                    Blog
                    <MdOpenInNew />
                    </Link>
                </li>
            </ul>

            <div
            onClick={() => setDrawer(false)}
            tabIndex={drawer ? undefined : -1}
             data-open={drawer} className="bg-gradient-to-r from-black  fixed top-0 left-0 bottom-0 right-0 
             data-[open=false]:-translate-x-full transition-all duration-300 ease-in-out">
                <ul className="flex gap-4 list-none h-full flex-col p-4 w-60 bg-black" onClick={event => event.stopPropagation()}>
               
                <li >
                    <Link href="/" data-active={currentPath === '/'} className='data-[active=true]:underline'>Página inicial</Link>
                </li>
                <li >
                    <Link href="/cursos" data-active={currentPath === '/cursos'} className='data-[active=true]:underline'>Cursos</Link>
                </li>
                <li >
                    <Link href="https://blog.codarse.com" target="_blank" className='flex gap-1 items-center'>
                    Blog
                    <MdOpenInNew />
                    </Link>
                </li>
            </ul>
            </div>
            
            <h1 className="sm:hidden">{title}</h1> 
        </nav>
    )
}