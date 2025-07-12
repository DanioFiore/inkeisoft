import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About - Inkeisoft',
    description: 'Learn more about Danio Fiore, software developer and CEO of Inkeisoft. Passionate about creating minimal, effective software solutions.',
    keywords: ['about', 'danio fiore', 'software developer', 'inkeisoft', 'ceo', 'full stack developer'],
    openGraph: {
        title: 'About - Inkeisoft',
        description: 'Learn more about Danio Fiore, software developer and CEO of Inkeisoft.',
        type: 'website',
        url: 'https://www.inkeisoft.com/about',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About - Inkeisoft',
        description: 'Learn more about Danio Fiore, software developer and CEO of Inkeisoft.',
    },
}

export default function AboutLayout({
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
