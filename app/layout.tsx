import Header from "@/components/ui/header";
import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";

const TTFirsNeue = localFont({
  src: [
    {
      path: "../public/fonts/TTFirsNeue/TTFirsNeue-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/TTFirsNeue/TTFirsNeue-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/TTFirsNeue/TTFirsNeue-Medium.woff2",
      weight: "600",
      style: "medium",
    },
    {
      path: "../public/fonts/TTFirsNeue/TTFirsNeue-DemiBold.woff2",
      weight: "700",
      style: "semibold",
    },
    {
      path: "../public/fonts/TTFirsNeue/TTFirsNeue-Bold.woff2",
      weight: "800",
      style: "bold",
    },
    {
      path: "../public/fonts/TTFirsNeue/TTFirsNeue-Black.woff2",
      weight: "900",
      style: "black",
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
      <body className={`${TTFirsNeue.className}`}>
        {/* <Provider attribute="class" defaultTheme="system" enableSystem> */}
        <main
          className={`bg-black font-bold text-lg text-primary min-h-screen mx-auto max-w-7xl`}
        >
          <Header />
          {children}
        </main>
        {/* </Provider> */}
      </body>
    </html>
  );
}
