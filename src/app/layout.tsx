import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig, profile } from "@/data/portfolio";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Aman Deep",
    "amandeepintl",
    "13 year old developer",
    "teen developer India",
    "student developer portfolio",
    "Minecraft mod developer",
    "Java developer India",
    "Python developer",
    "AI experiment",
    "LinguaBridge",
    "Inspect.gg",
    "BabyMind",
    "LangBY",
    "Spartrix",
    "Clavyy",
    "young developer portfolio India"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@amandeepintl"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        "name": siteConfig.name,
        "url": siteConfig.url,
        "image": profile.avatar,
        "sameAs": [
          profile.github,
          profile.instagram
        ],
        "jobTitle": "Developer",
        "knowsAbout": ["Java", "Python", "Minecraft Modding", "Web Development", "AI Experiments"]
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.title,
        "publisher": {
          "@id": `${siteConfig.url}/#person`
        }
      }
    ]
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${sans.variable}`}>
      <head>
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

