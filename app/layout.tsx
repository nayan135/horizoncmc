import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Horizon CMC Club",
  description: "Created by Narayan Bhusal",
  generator: "naranbhusal02 nayan135",
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
