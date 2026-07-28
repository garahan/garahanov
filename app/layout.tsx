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
    default: "Begench Garahanov — Researcher · Engineer · Leader",
    template: "%s — Begench Garahanov",
  },
  description:
    "Personal website of Begench Garahanov — researcher, engineer, and writer based in Tokyo, Japan. Bridging engineering, econometrics, and global leadership.",
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
    description: "Researcher · Engineer · Leader — based in Tokyo, Japan.",
    images: ["/images/Garahanov.jpeg"],
    url: "https://garahanov.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
