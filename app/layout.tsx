import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { sitePath } from "../lib/sitePaths";
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
  const backgroundImages = {
    "--image-hero-danang": `url("${sitePath("/images/hero-danang-golf-coast.png")}")`,
    "--image-golf-legend": `url("${sitePath("/images/golf-legend-danang.png")}")`,
    "--image-golf-hoiana": `url("${sitePath("/images/golf-hoiana-shores.png")}")`,
    "--image-golf-vinpearl": `url("${sitePath("/images/golf-vinpearl-nam-hoi-an.png")}")`,
    "--image-golf-montgomerie": `url("${sitePath("/images/golf-montgomerie-links.png")}")`,
    "--image-lifestyle": `url("${sitePath("/images/experience-golf-resort-lifestyle.png")}")`,
    "--image-my-khe": `url("${sitePath("/images/destination-my-khe-beach.png")}")`,
    "--image-son-tra": `url("${sitePath("/images/destination-son-tra-peninsula.png")}")`,
    "--image-linh-ung": `url("${sitePath("/images/destination-linh-ung-pagoda.png")}")`,
    "--image-dragon": `url("${sitePath("/images/destination-dragon-bridge.png")}")`,
    "--image-hoi-an": `url("${sitePath("/images/destination-hoi-an-ancient-town.png")}")`,
    "--image-thu-bon": `url("${sitePath("/images/destination-thu-bon-river.png")}")`,
    "--image-ba-na": `url("${sitePath("/images/destination-ba-na-hills.png")}")`,
    "--image-golden-bridge": `url("${sitePath("/images/destination-golden-bridge.png")}")`,
    "--image-marble": `url("${sitePath("/images/destination-marble-mountains.png")}")`,
  } as CSSProperties;

  return (
    <html lang="zh">
      <body style={backgroundImages}>{children}</body>
    </html>
  );
}
