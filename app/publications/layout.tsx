import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
};

export default function PublicationsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
