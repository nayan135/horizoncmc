import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CMC - Co-Curricular Management Committee | New Horizon College",
    template: "%s | CMC NHC"
  },
  description: "Official website of the Co-Curricular Management Committee (CMC) at New Horizon College, Butwal. Organizing and managing co-curricular activities, events, and student engagement programs.",
  keywords: [
    "CMC",
    "Co-Curricular Management Committee",
    "New Horizon College",
    "Butwal",
    "Nepal",
    "Student Activities",
    "Events",
    "Management",
    "Students",
    "Co-curricular",
    "College Committee"
  ],
  authors: [
    { name: "Narayan Bhusal", url: "https://naranbhusal02.me" },
    { name: "Nayan Acharya", url: "https://nayan135.com.np" }
  ],
  creator: "CMC Development Team",
  publisher: "Co-Curricular Management Committee of New Horizon College",
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
    title: "CMC - Co-Curricular Management Committee | New Horizon College",
    description: "Official website of the Co-Curricular Management Committee (CMC) at New Horizon College, Butwal. Organizing and managing co-curricular activities and student engagement programs.",
    siteName: "CMC NHC",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Co-Curricular Management Committee of New Horizon College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CMC - Co-Curricular Management Committee | New Horizon College",
    description: "Organizing and managing co-curricular activities, events, and student engagement programs at New Horizon College, Butwal.",
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
      { url: "/image.png", sizes: "any" },
      { url: "/image.png", sizes: "32x32", type: "image/png" },
      { url: "/image.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/image.png",
    shortcut: "/image.png",
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
      <body>{children}</body>
    </html>
  );
}
