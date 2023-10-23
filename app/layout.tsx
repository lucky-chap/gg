import { Provider } from "@/components/provider";
import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";
import Header from "@/components/header";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Obed Danquah",
  generator: "Next.js",
  applicationName: "portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Boilerplate",
    "Template",
    "shadcn-ui",
  ],
  authors: [{ name: "Virgil", url: "https://huncho.vercel.app" }],
  colorScheme: "dark",
  creator: "Virgil",
  publisher: "Virgil",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://huncho.vercel.app"),
  openGraph: {
    title: "Huncho",
    description: "My ever-evolving digital garden",
    url: "https://huncho.vercel.app",
    siteName: "huncho",
    images: [
      {
        url: "https://huncho.vercel.app/og.png",
        width: 800,
        height: 600,
        alt: "My ever-evolving digital garden",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Provider attribute="class" defaultTheme="light" enableSystem>
          <main className="bg-[#fafafa] text-primary">
            <Header />
            <section className="min-h-screen mx-auto max-w-2xl px-3">
              {children}
            </section>
          </main>
        </Provider>
      </body>
    </html>
  );
}
