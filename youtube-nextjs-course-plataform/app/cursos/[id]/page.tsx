import type { Metadata } from "next";
import { CourseHeader } from "@/app/components/course-header/CourseHeader";
import { StartCourse } from "@/app/components/StartCourse";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

//title superior da tela...
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  return {
    title: id,
    description: id,
  };
}

export default async function PageCourseDetails({ params }: Props) {
  const { id } = await params;

  return (
    <main className="mt-8 flex justify-center">
        <div className="min-[880px]:max-w-[880px] w-full px-2 flex flex-col gap-6">
            <StartCourse
              title="🏆 Curso de API Rest, Node e Typescript"
              idClass="1"
              idCourse='1'
              imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            />
            <CourseHeader />

            <CourseHeader />
            <CourseHeader />
            <CourseHeader />
            <CourseHeader />
        </div>
    </main>
  );
}
