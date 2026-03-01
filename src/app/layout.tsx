import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Portfolio",
    description:
        "Portfolio of Vignesh E — Machine Learning Engineer specializing in scalable ML systems, deep learning, and AI-powered SaaS products. Explore projects, experience, and technical writing.",
    keywords: [
        "Machine Learning Engineer",
        "Data Scientist",
        "AI Engineer",
        "Deep Learning",
        "MLOps",
        "Python",
        "TensorFlow",
        "PyTorch",
        "Portfolio",
        "Vignesh E",
    ],
    authors: [{ name: "Vignesh E" }],
    openGraph: {
        title: "Vignesh E — Machine Learning Engineer & Data Scientist",
        description:
            "Building scalable ML systems and AI-powered SaaS products. Explore my portfolio of projects, research, and technical writing.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vignesh E — Machine Learning Engineer",
        description:
            "Building scalable ML systems and AI-powered SaaS products.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta name="theme-color" content="#FFFFFF" />
            </head>
            <body className="font-sans">
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
