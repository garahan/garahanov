import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Begench Garahanov — researcher, engineer, and leader based in Tokyo. Bridging engineering, econometrics, and global leadership.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
