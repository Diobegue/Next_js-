import type { Metadata } from "next";
import { Section } from "@/app/components/section/Section";
import { courses } from "@/app/data/courses";

export const metadata: Metadata = {
  title: "CodarSe - Todos os cursos",
};

export default function PageCursos() {
  return (
    <main className="mt-8 flex justify-center">
      <div className="min-[880px]:max-w-[880px] w-full">
        <Section
          title="Todos os Cursos"
          variant="grid"
          items={courses.map((course) => ({
            href: `/cursos/${course.slug}`,
            title: course.title,
            image: course.image,
            description: course.description,
          }))}
        />
      </div>
    </main>
  );
}
