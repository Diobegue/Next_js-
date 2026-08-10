'use client';
import Link from "next/link";
import { MdOpenInNew, MdMenu } from "react-icons/md";
import { usePathname } from 'next/navigation';


export const Header = () => {
    const currentPath = usePathname()

    return (
        <nav className="flex items-center gap-4 justify-start md:justify-center bg-[var(--color-primary)] py-2 sm:py-4 px-6">
            
            <button className="sm:hidden">
                <MdMenu className="size-8"/>
            </button>
            <ul className="flex gap-4 list-none items-center">
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
            <h1 className="sm:hidden">Página inicial</h1>
        </nav>
    )
}