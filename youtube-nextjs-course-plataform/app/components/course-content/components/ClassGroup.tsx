
'use client'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Class } from "./Class";
import { useState } from "react";


interface IClassGroupProps {

    title: string;
    courseId: string;
    classes: {
        id:string;
        title: string;
    }[];
}

export const ClassGroup = ({ title, courseId, classes }: IClassGroupProps) => {

    const [open, setOpen] = useState(false);


    return (

        
       <>
       <button className="flex items-center gap-6 p-4 w-full text-left bg-[var(--color-paper)]"
        onClick={() => setOpen(!open)}       
       >
        {open
        ? <MdKeyboardArrowDown size={20} />
        : <MdKeyboardArrowDown size={20} className="rotate-[-90deg]" />
        }
        {title}
        </button>

        <ol data-open={open} className="flex flex-col data-[open=false]:hidden">
        {classes.map(({ id, title }) => (
            <li key={id}>
            <Class  title={title} playerUrl={`/player/${courseId}/${id}`} />
            </li>
        ))} 
        </ol>    
       </>
    )
}