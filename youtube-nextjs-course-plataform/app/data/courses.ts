export interface CourseClass {
  id: string;
  title: string;
  videoId: string | null;
  done: boolean;
}

export interface CourseClassGroup {
  title: string;
  classes: CourseClass[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  classGroups: CourseClassGroup[];
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "api-rest-node-typescript",
    title: "Curso de API Rest, Node e TypeScript",
    description:
      "Curso introdutório de Node.js e TypeScript com foco em APIs REST, CRUD, paginação, filtros e banco de dados SQL.",
    image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
    classGroups: [
      {
        title: "Introdução e apresentação do projeto",
        classes: [
          {
            id: "aula-00",
            title: "Aula 00 - Apresentação do curso e tecnologias",
            videoId: "bP47qRVRqQs",
            done: false,
          },
          {
            id: "aula-01",
            title: "Aula 01 - Apresentação do projeto",
            videoId: null,
            done: false,
          },
          {
            id: "aula-02",
            title: "Aula 02 - Configuração do ambiente",
            videoId: null,
            done: false,
          },
          {
            id: "aula-03",
            title: "Aula 03 - Estrutura inicial da aplicação",
            videoId: null,
            done: false,
          },
        ],
      },
      {
        title: "Desenvolvimento da API",
        classes: [
          {
            id: "aula-04",
            title: "Aula 04 - Criando os primeiros endpoints",
            videoId: null,
            done: false,
          },
          {
            id: "aula-05",
            title: "Aula 05 - Integração com banco de dados",
            videoId: null,
            done: false,
          },
          {
            id: "aula-06",
            title: "Aula 06 - Paginação e filtros",
            videoId: null,
            done: false,
          },
          {
            id: "aula-07",
            title: "Aula 07 - Revisão do projeto",
            videoId: null,
            done: false,
          },
        ],
      },
    ],
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getCourseById(id: string) {
  return courses.find((course) => course.id === id);
}

export function getClassById(course: Course, classId: string) {
  return course.classGroups
    .flatMap((group) => group.classes)
    .find((courseClass) => courseClass.id === classId);
}
