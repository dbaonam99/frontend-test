import type { ReactNode } from "react";
import type { Metadata } from "next";
import { inter } from "@/src/libs/fonts/index";
import Header from "@/src/components/shared/Header/Header";
import "@/src/app/globals.css";
import MockDataProvider from "@/src/contexts/mockDataProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-inter`}
    >
      <body>
        <MockDataProvider>
          <Header />
          <div className="max-w-7xl mx-auto">{children}</div>
        </MockDataProvider>
      </body>
    </html>
  );
}
