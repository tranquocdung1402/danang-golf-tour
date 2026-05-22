import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YD Travel | Da Nang Golf & Leisure",
  description:
    "Discover Da Nang as a premium golf and coastal travel destination, featuring world-class golf courses, beaches, heritage, and resort experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
