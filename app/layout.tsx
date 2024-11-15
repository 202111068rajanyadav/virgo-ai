import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virgo AI",
  description: "Virgo AI by Rajan Yadav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
