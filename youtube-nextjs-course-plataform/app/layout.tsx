import type { Metadata } from "next";
import {Nunito} from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

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
      <body className={nunito.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
