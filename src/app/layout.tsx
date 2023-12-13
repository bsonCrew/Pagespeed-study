import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ReactNode} from "react";
import RecoilRootProvider from "@/recoil/RecoilRootProvider";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Pagespeed Study',
    description: 'use Pagespeed as a substitute for Lighthouse',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className="flex min-h-screen flex-col p-24 border-4 border-white">
            <div className="w-full h-full">
                <p className="mb-4 text-3xl">
                    Use Pagespeed
                </p>
                <RecoilRootProvider>
                    {children}
                </RecoilRootProvider>
            </div>
        </main>
        </body>
        </html>
    )
}
