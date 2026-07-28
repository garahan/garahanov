import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garahanov.vercel.app"),
  title: {
    default: "Begench Garahanov — Technical Expert · Quantitative Research",
    template: "%s — Begench Garahanov",
  },
  description:
    "Begench Garahanov is a Tokyo-based Technical Expert at Apple Japan and a Waseda University master’s graduate in Policy Sciences.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Garahanov",
  },
  icons: {
    icon: [{ url: "/icon-512.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Begench Garahanov",
    description:
      "Technical Expert · Quantitative Research · Multilingual — based in Tokyo, Japan.",
    url: "https://garahanov.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-dvh bg-[#050505] text-[#F5F5F0] antialiased">
        {children}
      </body>
    </html>
  );
}
