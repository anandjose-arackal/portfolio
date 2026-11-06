import type { Metadata, Viewport } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { WorkspaceHeader } from "@/components/layout/WorkspaceHeader";
import { profile } from "@/lib/data";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Software Engineer",
    "AI Architect",
    "Full-Stack Engineer",
    "Enterprise Software",
    "Cloud Architecture",
    "Ruby on Rails",
    ".NET",
    "Azure",
    "AP & AR Automation",
    "ERP Integration",
    "Payment Integration",
    "AI Agents",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d0d14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full">
        <Sidebar />
        <div className="lg:pl-[264px]">
          <WorkspaceHeader />
          <main className="pb-24 lg:pb-0">{children}</main>
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
