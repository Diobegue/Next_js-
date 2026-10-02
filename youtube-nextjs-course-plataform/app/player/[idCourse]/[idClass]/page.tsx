interface Props {
  params: Promise<{
    idCourse: string;
    idClass: string;
  }>;
}

export default async function PlayerPage({ params }: Props) {
  const { idCourse, idClass } = await params;

  return (
    <>
      player {idCourse}  {idClass}
    </>
  );
}