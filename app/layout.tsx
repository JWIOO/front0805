import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "@/public/styles/main.scss";
import localFont from "next/font/local";

export const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--inter",
//   fallback: [
//     "-apple-system",
//     "Segoe UI",
//     "Roboto",
//     "Ubuntu",
//     "Fira Sans",
//     "Arial",
//     "sans-serif",
//   ],
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--poppins",
//   fallback: [
//     "-apple-system",
//     "Segoe UI",
//     "Roboto",
//     "Ubuntu",
//     "Fira Sans",
//     "Arial",
//     "sans-serif",
//   ],
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--mont",
//   fallback: [
//     "-apple-system",
//     "Segoe UI",
//     "Roboto",
//     "Ubuntu",
//     "Fira Sans",
//     "Arial",
//     "sans-serif",
//   ],
// });

export const metadata: Metadata = {
  title: "EduCerti",
  description: "에듀써티",
  keywords: [
    "Artificial",
    "Ai",
    "Network",
    "Javascript",
    "Typescript",
    "React",
    "nextjs",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={`${pretendard.variable}`}>{children}</body>
    </html>
  );
}
