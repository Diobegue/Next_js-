'use client'

import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { CopyContext } from "./components/CopyContext";



interface IcourseHeaderProps {
    title: string;
    description:string
    numberOfClasses: number;
}

export const CourseHeader = ( {title, description, numberOfClasses}: IcourseHeaderProps) => {

    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl">{title}</h1>
            <CollapsibleText numberOfLinesWhenClosed={3}>
                {description}
            </CollapsibleText>

            <div className="flex gap-2 items-center">
                <CopyContext title="copie link abaixo" content={window.location.href}>  
                    <button className="py-2 px-4 bg-[var(--color-paper)] rounded-full flex gap-2 items-center text-sm">
                        <MdShare />
                        Compartilhar
                    </button>
                </CopyContext>

               <span>{numberOfClasses} aulas</span> 
            </div>
        </div>
    )


}