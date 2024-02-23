import "./globals.css";
import { Rubik } from "next/font/google";

const montserrat = Rubik({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin']
});

export const metadata = {
  title: " Abhiram Desai Portfolio",
  description: "All about Abhiram Desai Data Scientist.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Abhiram Desai</title>
        <meta name="description" content="Abhiram Desai's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/app-favicon.ico" /> */}
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
