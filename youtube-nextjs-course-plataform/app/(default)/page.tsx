import type { Metadata } from "next";
import { Section } from "@/app/components/section/Section";
import { KeepWatching } from "@/app/components/KeepWatching";
import { courses } from "@/app/data/courses";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
};

export default function PageHome() {
  return (
    <main className="mt-8 flex justify-center">
      <div className="w-full min-[880px]:max-w-[880px] flex flex-col gap-4">
        <KeepWatching />
        <Section
          title="Veja mais cursos"
          variant="h-list"
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
