import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseHeader } from "@/app/components/course-header/CourseHeader";
import { StartCourse } from "@/app/components/StartCourse";
import { CourseContent } from "@/app/components/course-content/CourseContent";
import { getCourseBySlug } from "@/app/data/courses";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseBySlug(id);

  return course
    ? { title: course.title, description: course.description }
    : { title: "Curso não encontrado" };
}

export default async function PageCourseDetails({ params }: Props) {
  const { id } = await params;
  const course = getCourseBySlug(id);

  if (!course) notFound();

  return (
    <main className="mt-8 flex justify-center">
      <div className="w-full min-[880px]:max-w-[880px] px-2 lg:px-0 flex flex-col gap-6 md:flex-row-reverse">
        <div className="flex-[1]">
          <StartCourse
            title={course.title}
            idClass={course.classGroups[0].classes[0].id}
            idCourse={course.id}
            imageUrl={course.image}
          />
        </div>

        <div className="flex-[2] flex flex-col gap-12 pb-12">
          <CourseHeader
            numberOfClasses={course.classGroups.reduce(
              (total, group) => total + group.classes.length,
              0,
            )}
            title={course.title}
            description={course.description}
          />
          <CourseContent
            classGroups={course.classGroups.map((group) => ({
              title: group.title,
              courseId: course.id,
              classes: group.classes.map(({ id, title }) => ({ id, title })),
            }))}
          />
        </div>
      </div>
    </main>
  );
}
