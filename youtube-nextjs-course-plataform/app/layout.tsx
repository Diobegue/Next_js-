import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

//fonte do google
const nunito = Nunito({ variable: "--font-nunito", subsets:["latin"] });

//metadata- para SEO -title-descriçao -tags
export const metadata: Metadata = {
  title: "CodarSe - Os melhores cursos de programação gratuitos",
  description: "Os melhores cursos de programaçao gratuitos com a melhor experiencia de aprendizado e foco",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
