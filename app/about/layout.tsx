import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About - Inkeisoft',
    description: 'Minimal Software Development',
    keywords: ['about', 'danio fiore', 'software developer', 'inkeisoft', 'software engineering', 'minimalistic', 'minimal software development', 'clean code', 'php', 'vue.js', 'javascript', 'laravel', 'python', 'fastapi', 'mysql', 'sql', 'postgresql', 'web development','tech startup', 'modern development', 'user experience', 'performance optimization'],
    openGraph: {
        title: 'About - Inkeisoft',
        description: 'Minimal Software Development',
        type: 'website',
        url: 'https://www.inkeisoft.com/about',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About - Inkeisoft',
        description: 'Minimal Software Development',
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
