import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import { Header } from "./components/header/Header";

//fonte do google
const nunito = Nunito({ variable: "--font-nunito", subsets:["latin"] });

//metadata- para SEO -title-descriçao -tags
export const metadata: Metadata = {
  title: "CodarSe - Os melhores cursos de programação gratuitos",
  description: "Os melhores cursos de programaçao gratuitos com a melhor experiencia de aprendizado e foco",
};
interface IRootLayout extends Readonly<{
  children: React.ReactNode;
}> { }
  

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
