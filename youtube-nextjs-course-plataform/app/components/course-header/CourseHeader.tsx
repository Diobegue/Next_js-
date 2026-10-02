'use client'

import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { CopyContext } from "./components/CopyContext";
import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";



interface IcourseHeaderProps {
    title: string;
    description:string
    numberOfClasses: number;
}

export const CourseHeader = ( {title, description, numberOfClasses}: IcourseHeaderProps) => {
    const pathname = usePathname();
    const origin = useSyncExternalStore(
        () => () => {},
        () => window.location.origin,
        () => "",
    );
    const pageUrl = origin && pathname ? new URL(pathname, origin).href : "";

    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl">{title}</h1>
            <CollapsibleText numberOfLinesWhenClosed={3}>
                {description}
            </CollapsibleText>

            <div className="flex gap-2 items-center">
                <CopyContext title="copie link abaixo" content={pageUrl}>
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
