import type { Metadata } from "next";
import { CourseHeader } from "@/app/components/course-header/CourseHeader";
import { StartCourse } from "@/app/components/StartCourse";

import { ClassGroup } from "@/app/components/course-content/components/ClassGroup";

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
      <div className="w-full min-[880px]:max-w-[880px] px-2 lg:px-0 flex flex-col gap-6 md:flex-row-reverse">
        <div className="flex-[1]">
          <StartCourse
            title={`🏆 Curso de ${id}`}
            idClass="1"
            idCourse={id}
            imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
          />
        </div>

        <div className="flex-[2] flex flex-col gap-4">
          <CourseHeader />
          <ClassGroup
            title="Introdução e apresentação do projeto"
            courseId={id}
            classes={[
              { id: "1", title: "Aula 1 - Introdução" },
              { id: "2", title: "Aula 2 - Apresentação do projeto" },
              { id: "3", title: "Aula 3 - Configuração do ambiente" },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
