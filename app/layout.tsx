import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CMC Club of New Horizon College",
    template: "%s | CMC Club NHC"
  },
  description: "Official website of the Computer & Management Club (CMC) at New Horizon College, Butwal. Driving innovation, building tomorrow through collaborative excellence in technology and management.",
  keywords: [
    "CMC Club",
    "New Horizon College",
    "Computer Management Club",
    "Butwal",
    "Nepal",
    "Technology",
    "Management",
    "Students",
    "Innovation",
    "Programming",
    "IT Club"
  ],
  authors: [
    { name: "Narayan Bhusal", url: "https://naranbhusal02.me" },
    { name: "Nayan Acharya", url: "https://nayan135.com.np" }
  ],
  creator: "CMC Club Development Team",
  publisher: "CMC Club of New Horizon College",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cmcnhc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cmcnhc.com",
    title: "CMC Club of New Horizon College",
    description: "Official website of the Computer & Management Club (CMC) at New Horizon College, Butwal. Driving innovation, building tomorrow through collaborative excellence.",
    siteName: "CMC Club NHC",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "CMC Club of New Horizon College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMC Club of New Horizon College",
    description: "Driving innovation, building tomorrow through collaborative excellence in technology and management.",
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "education",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  themeColor: "#E86E1C",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#E86E1C" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>{children}</body>
    </html>
  );
}
