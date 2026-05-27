import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Сразу можешь поменять метаданные для портфолио
export const metadata: Metadata = {
    title: "Kristina | Full-Stack Developer Portfolio",
    description: "Custom web development using Next.js, TypeScript, and PostgreSQL.",
};

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Проверяем, что локаль поддерживается
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Получаем сообщения для провайдера
    const messages = await getMessages();

    return (
        <html
            lang={locale}
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col bg-[#0f172a]">
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <Analytics />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
