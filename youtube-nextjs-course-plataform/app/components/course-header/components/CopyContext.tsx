'use client'
import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MdCheck, MdContentCopy } from "react-icons/md";



interface CopyContextProps {
    title: string;
    content: string;
    children: React.ReactNode;
}

export const CopyContext = ({ title, content, children }: CopyContextProps) => {
    const [copied, setCopied] = useState(false);

 const handleCopy = async () => {
    
            await navigator.clipboard.writeText(content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);

       

       
};

    return(
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                {children}
            </DropdownMenu.Trigger>
            
            <DropdownMenu.Portal>
                <DropdownMenu.Content className="p-2 bg-[var(--color-paper)] border border-[var(--color-primary)] rounded-md flex flex-col gap-2 min-w-72 max-w-sm">
                    <span>{title}</span>

                    <div className="flex gap-2 items-center">
                        <input value={content}
                        readOnly
                        autoFocus
                        onFocus={e => e.target.select()}
                        className="bg-[var(--color-background)] p-1 px-2 rounded w-full"
                        />
                        <button onClick={handleCopy}>
                            {copied ? <MdCheck className="text-green-500"/> : <MdContentCopy />}
                        </button>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root> 
        
    )
}