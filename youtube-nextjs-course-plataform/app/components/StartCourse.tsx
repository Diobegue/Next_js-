import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface IStartCourseProps {
    idClass: string;
    idCourse: string;
    imageUrl: string;
}

export const StartCourse = ({ idClass, idCourse, imageUrl }: IStartCourseProps) => {

    return (
        <div className="p-3  rounded-md bg-[var(--color-paper)] flex flex-col gap-4">
           <Link
            href={`/player/${idCourse}/${idClass}`}
            style={{backgroundImage: `url(${imageUrl})`}}
            className='w-full bg-cover aspect-video bg-center'
            >
             <div className="w-full h-full flex items-center justify-center bg-black rounded opacity-0 hover:opacity-50 transition-opacity">
                <MdPlayCircleOutline size={58} />
             </div>

             
           </Link>

            <Link 
            href={`/player/${idCourse}/${idClass}`}
            className="bg-[var(--color-primary)] px-3 p-2 rounded-md text-center"
            >
             Começar curso
           </Link>
        
        </div>
    )
}