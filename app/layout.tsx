import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { sitePath } from "../lib/sitePaths";
import "./globals.css";

export const metadata: Metadata = {
  title: "YD Golf Tour",
  description:
    "Discover Da Nang as a premium golf and coastal travel destination, featuring world-class golf courses, beaches, heritage, and resort experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const backgroundImages = {
    "--image-hero-danang": `url("${sitePath("/images/hero-danang-golf-coast.webp")}")`,
    "--image-golf-legend": `url("${sitePath("/images/golf-legend-danang.webp")}")`,
    "--image-golf-hoiana": `url("${sitePath("/images/golf-hoiana-shores.webp")}")`,
    "--image-golf-vinpearl": `url("${sitePath("/images/golf-vinpearl-nam-hoi-an.webp")}")`,
    "--image-golf-montgomerie": `url("${sitePath("/images/golf-montgomerie-links.webp")}")`,
    "--image-lifestyle": `url("${sitePath("/images/experience-golf-resort-lifestyle.webp")}")`,
    "--image-my-khe": `url("${sitePath("/images/destination-my-khe-beach.webp")}")`,
    "--image-son-tra": `url("${sitePath("/images/destination-son-tra-peninsula.webp")}")`,
    "--image-linh-ung": `url("${sitePath("/images/destination-linh-ung-pagoda.webp")}")`,
    "--image-dragon": `url("${sitePath("/images/destination-dragon-bridge.webp")}")`,
    "--image-hoi-an": `url("${sitePath("/images/destination-hoi-an-ancient-town.webp")}")`,
    "--image-thu-bon": `url("${sitePath("/images/destination-thu-bon-river.webp")}")`,
    "--image-ba-na": `url("${sitePath("/images/destination-ba-na-hills.webp")}")`,
    "--image-golden-bridge": `url("${sitePath("/images/destination-golden-bridge.webp")}")`,
    "--image-marble": `url("${sitePath("/images/destination-marble-mountains.webp")}")`,
  } as CSSProperties;

  return (
    <html lang="zh">
      <body style={backgroundImages}>{children}</body>
    </html>
  );
}
