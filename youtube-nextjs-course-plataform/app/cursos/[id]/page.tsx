import type { Metadata } from "next";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

//title superior da tela...
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  return {
    title: (await params).id,
    description: (await params).id,
  };
}

export default async function PageCourseDetails({ params }: Props) {
  const { id } = await params;

  return (
    <main className="mt-8 flex justify-center">
      detalhes de Cursos {id}
    </main>
  );
}
