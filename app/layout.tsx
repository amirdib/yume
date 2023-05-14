import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Yume - Amir DIB",
  description:
    "A mini app of a compact carousel imbued with a minimalist Japanese aesthetic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
