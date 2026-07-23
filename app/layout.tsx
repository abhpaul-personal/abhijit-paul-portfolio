import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhijit Paul — Senior Product Manager",
  description:
    "Senior Product Manager with 20+ years across e-commerce, B2B SaaS, and logistics. I build platforms that scale without breaking.",
  openGraph: {
    title: "Abhijit Paul — Senior Product Manager",
    description:
      "I build platforms that scale without breaking. 30M orders scaled, 33 merchants migrated with zero incidents, €3.65M ARR delivered.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijit Paul — Senior Product Manager",
    description: "I build platforms that scale without breaking.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
