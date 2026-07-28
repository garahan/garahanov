import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Begench Garahanov — a Tokyo-based Technical Expert at Apple Japan and Waseda University master’s graduate in Policy Sciences.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
