interface Props {
  params: Promise<{
    idCourse: string;
    idClass: string;
  }>;
}

export default async function PlayerPage({ params }: Props) {
  const { idCourse, idClass } = await params;

  return (
    <main className="mt-8 flex justify-center px-4">
      <div className="w-full min-[880px]:max-w-[880px]">
        <h1 className="font-extrabold text-xl">Player do curso</h1>
        <p>Curso: {idCourse}</p>
        <p>Aula: {idClass}</p>
      </div>
    </main>
  );
}