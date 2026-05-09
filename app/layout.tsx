import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sangsangwoori AI",
    default: "Sangsangwoori AI Platform | Empowering Seniors & SMBs",
  },
  description: "Bridging the gap between senior expertise and modern AI technology. Find verified AI consultants and transformation solutions.",
  openGraph: {
    title: "Sangsangwoori AI Platform",
    description: "Bridging the gap between senior expertise and modern AI technology.",
    url: "https://sangsangwoori.com",
    siteName: "Sangsangwoori",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sangsangwoori AI Platform",
    description: "Bridging the gap between senior expertise and modern AI technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sangsangwoori.com/#organization",
        "name": "Sangsangwoori",
        "url": "https://sangsangwoori.com",
        "logo": "https://sangsangwoori.com/logo.png",
        "description": "Empowering seniors and small businesses with AI.",
      },
      {
        "@type": "WebSite",
        "@id": "https://sangsangwoori.com/#website",
        "url": "https://sangsangwoori.com",
        "name": "Sangsangwoori AI Platform",
        "publisher": {
          "@id": "https://sangsangwoori.com/#organization"
        }
      }
    ]
  };

  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
