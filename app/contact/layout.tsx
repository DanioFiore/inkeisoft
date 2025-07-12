import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact - Inkeisoft',
    description: 'Get in touch with Inkeisoft for your software development needs. Based in Bari, Italy, available for remote work worldwide.',
    keywords: ['contact', 'software development', 'inkeisoft', 'bari', 'italy', 'remote work', 'minimalistic'],
    openGraph: {
        title: 'Contact - Inkeisoft',
        description: 'Get in touch with Inkeisoft for your software development needs.',
        type: 'website',
        url: 'https://www.inkeisoft.com/contact',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact - Inkeisoft',
        description: 'Get in touch with Inkeisoft for your software development needs.',
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 py-16">
            {children}
        </div>
        </div>
    )
}
