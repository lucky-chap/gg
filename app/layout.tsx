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
  title: "Kaminari",
  generator: "Next.js",
  applicationName: "Kaminari",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Boilerplate",
    "Template",
    "shadcn-ui",
  ],
  authors: [{ name: "Virgil", url: "https://obedd.vercel.app" }],
  colorScheme: "dark",
  creator: "Virgil",
  publisher: "Virgil",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kaminari.vercel.app"),
  openGraph: {
    title: "Kaminari",
    description: "Next.js, TailwindCSS and shadcn-ui Starter Template",
    url: "https://kaminari.vercel.app",
    siteName: "Kaminari",
    images: [
      {
        url: "https://kaminari.vercel.app/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://kaminari.vercel.app/og-dark.png",
        width: 1800,
        height: 1600,
        alt: "Next.js, TailwindCSS and shadcn-ui Starter Template",
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
            <section className="min-h-screen mx-auto max-w-2xl">
              {children}
            </section>
          </main>
        </Provider>
      </body>
    </html>
  );
}
