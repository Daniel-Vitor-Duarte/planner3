import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Tagmanager from "./Tagmanager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planner 3",
  description: "Planner 3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Suspense>
          <Tagmanager />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
