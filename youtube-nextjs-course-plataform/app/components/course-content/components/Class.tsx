import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";


interface IClassProps {

    title: string;
    playerUrl: string;
}
    

export const Class = ({ title, playerUrl }: IClassProps) => {
    return (
        <Link href={playerUrl} className="flex items-center gap-6 p-4 ">
            <MdPlayCircleOutline size={20} />
            {title}
        </Link>
    )
}