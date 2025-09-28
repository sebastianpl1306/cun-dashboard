import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Cun - cursos",
  description: "Encuentra diferentes cursos donde puedes encontrar preguntas para aprender",
  keywords: 'cursos, educación, aprendizaje, evaluaciones, lecciones',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className={`${inter.className} h-full antialiased min-h-screen bg-gray-50`}>
        <Header/>
        { children }
      </body>
    </html>
  );
}
