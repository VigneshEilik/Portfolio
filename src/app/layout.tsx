import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
});

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
        { media: '(prefers-color-scheme: dark)', color: '#020617' },
    ],
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    title: {
        default: "Vignesh G | Data Scientist & AI Full Stack Developer",
        template: "%s | Vignesh G"
    },
    description:
        "High-performance AI solutions and production-grade data intelligence. Specialized in ML model building, data analytics, and full-stack AI SaaS development.",
    keywords: [
        "Data Scientist",
        "AI Developer",
        "Machine Learning Engineer",
        "Full Stack AI",
        "MLOps",
        "Python",
        "Freelance Data Scientist",
        "AI Portfolio",
        "Vignesh G",
    ],
    authors: [{ name: "Vignesh G" }],
    creator: "Vignesh G",
    metadataBase: new URL("https://vignesheilik.github.io"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Vignesh G | Data Scientist & AI Developer",
        description: "Transforming raw data into intelligent, production-ready systems.",
        url: "https://vignesheilik.github.io",
        siteName: "Vignesh G Portfolio",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vignesh G | Data Scientist",
        description: "Building the next generation of AI-powered intelligence.",
        creator: "@vignesheilik",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
            <body className="font-sans antialiased text-fg bg-bg selection:bg-accent/30 selection:text-fg">
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
