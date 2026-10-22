
import Link from 'next/link'
import { MdPlayCircle } from 'react-icons/md'
import { courses } from '@/app/data/courses'

const course = courses[0]
const lesson = course.classGroups[0].classes[0]

export const KeepWatching = () => {
    return (
        <Link
        href={`/player/${course.id}/${lesson.id}`}
        className='p-4 mx-4 flex gap-2 bg-[var(--color-primary)] rounded-2xl '
        >

            <div className='flex flex-col gap-2 flex-1'>
                <h1 className='font-bold line-clamp-1'>{lesson.title}</h1>
                <p className='line-clamp-1'>{course.title}</p>
            </div>

            <div className=' flex gap-2 items-center justify-center'>

                <span className='hidden md:block'>

                Continuar assisitndo
                </span>
                <MdPlayCircle size={28} />

            </div>
        </Link>
    )
}
