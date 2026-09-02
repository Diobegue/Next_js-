'use client';
import type { ReactNode,CSSProperties } from "react";
import { useState } from "react";

interface ICollapsibleTextProps {
    numberOfLinesWhenClosed: number;
    children?: ReactNode;
}

type ClampStyle = CSSProperties & {
    "--line-clamp": number;
};

export const CollapsibleText = ({ numberOfLinesWhenClosed, children }: ICollapsibleTextProps) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-end">
           <p 
           data-open={open}
           style={{ "--line-clamp": numberOfLinesWhenClosed } as ClampStyle}
           className="data-[open=false]:line-clamp-[var(--line-clamp)]"
           >
           { children }
           </p>

           <button
           data-open={open}
            className="bg-[var(--color-paper)] py-2 px-4 rounded-full data-[open=false]:-mt-8" 
            onClick={() => setOpen(!open)}>
            {open ? "Ver menos" : "Ver mais"}
            </button>
        </div>

    )
}