import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Side Proj",
  description: "Valentines Proposal Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-pink-300">{children}</body>
    </html>
  );
}
