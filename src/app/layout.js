import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Szymon Marcinkowski - Web Developer & Programmer",
  description:
    "Inquisitive and determined web developer, programmer, and freelancer. Passionate about technology and programming.",
  keywords:
    "web development, programming, technology, automation, developer, programmer, freelancer, WSB Code research club, freelancer, portfolio, web cv",
  author: "Szymon Marcinkowski",
  image: "./img/coding.png",
  url: "https://www.sMarcinkowski.com",
  type: "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
