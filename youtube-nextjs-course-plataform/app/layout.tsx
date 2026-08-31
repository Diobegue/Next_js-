import type { Metadata } from "next";

import "./globals.css";
import { Header } from "./components/header/Header";

//metadata- para SEO -title-descriçao -tags
export const metadata: Metadata = {
  title: "CodarSe - Os melhores cursos de programação gratuitos",
  description: "Os melhores cursos de programaçao gratuitos com a melhor experiencia de aprendizado e foco",
};
type IRootLayout = Readonly<{
  children: React.ReactNode;
}>
  

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        <Header />
        {children}
        </body>
    </html>
  );
}
