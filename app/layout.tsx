import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avenio.in"),
  title: {
    default: "Avenio Solutions",
    template: "%s | Avenio Solutions",
  },
  description:
    "Avenio Solutions builds and secures technology, creates AI-driven solutions, designs distinct brand identities, and drives digital growth - a single partner across web development, cybersecurity, AI solutions, graphic design, and digital marketing.",
  openGraph: {
    title: "Avenio Solutions",
    description:
      "Technology, AI, design, and digital growth solutions that help organizations build, secure and scale.",
    url: "https://avenio.in",
    siteName: "Avenio Solutions",
    images: ["/logo.png"],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  twitter: {
    card: "summary",
    title: "Avenio Solutions",
    description:
      "Technology, AI, design, and digital growth solutions that help organizations build, secure and scale.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
