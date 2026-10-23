import { notFound } from "next/navigation";
import {
  PlayerHeader,
  PlayerPlaylist,
  PlayerVideoPlayer,
} from "@/app/components/player";
import { getClassById, getCourseById } from "@/app/data/courses";

interface Props {
  params: Promise<{
    idClass: string;
    idCourse: string;
  }>;
}

export default async function PagePlayer({ params }: Props) {
  const { idCourse, idClass } = await params;
  const course = getCourseById(idCourse);

  if (!course) notFound();

  const currentClass = getClassById(course, idClass);
  if (!currentClass) notFound();

  const classGroups = course.classGroups.map((group) => ({
    title: group.title,
    classes: group.classes.map(({ id, title, done }) => ({
      classId: id,
      title,
      done,
    })),
  }));

  return (
    <main className="flex h-[calc(100dvh-4rem)] flex-col gap-2 overflow-hidden sm:h-[calc(100dvh-4.5rem)]">
      <PlayerHeader title={currentClass.title} subtitle={course.title} />

      <div className="flex min-h-0 flex-1 gap-2">
        <div className="min-h-0 w-full max-w-96">
          <PlayerPlaylist
            key={`${idCourse}-${idClass}`}
            playingClassId={idClass}
            playingCourseId={idCourse}
            classGroups={classGroups}
          />
        </div>

        <div className="min-h-0 flex-1 overflow-hidden">
          <div className="aspect-video w-full">
            <PlayerVideoPlayer videoId={currentClass.videoId} />
          </div>
        </div>
      </div>
    </main>
  );
}
