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
    "Begench Garahanov translates complex technical and quantitative evidence into clear decisions, stronger operations, and better customer outcomes.",
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
  themeColor: "#030304",
  colorScheme: "dark",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Begench Garahanov",
  alternateName: "がらはのふ べげんち",
  url: "https://garahanov.vercel.app",
  image: "https://garahanov.vercel.app/images/Garahanov.jpeg",
  jobTitle: "Technical Expert",
  worksFor: { "@type": "Organization", name: "Apple Japan" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Tokai University" },
    { "@type": "CollegeOrUniversity", name: "Waseda University" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tokyo",
    addressRegion: "Tokyo",
    addressCountry: "JP",
  },
  knowsLanguage: ["Japanese", "English", "Russian"],
  knowsAbout: [
    "Policy Science",
    "Econometrics",
    "Applied Chemistry",
    "Data Analysis",
    "Energy Systems",
  ],
  sameAs: [
    "https://github.com/garahan",
    "https://www.linkedin.com/in/bgarahanov",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="skip-link"
        >
          Skip to content
        </a>
        <div id="main">{children}</div>
      </body>
    </html>
  );
}
