import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects | Danio Fiore - Software Developer',
    description: 'Explore the projects and work of Danio Fiore, CEO of Inkeisoft. From backend APIs to full-stack applications, discover the solutions I\'ve built.',
    keywords: ['projects', 'portfolio', 'software development', 'web applications', 'API development', 'Danio Fiore', 'Inkeisoft'],
    openGraph: {
        title: 'Projects | Danio Fiore - Software Developer',
        description: 'Explore the projects and work of Danio Fiore, CEO of Inkeisoft. From backend APIs to full-stack applications, discover the solutions I\'ve built.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projects | Danio Fiore - Software Developer',
        description: 'Explore the projects and work of Danio Fiore, CEO of Inkeisoft. From backend APIs to full-stack applications, discover the solutions I\'ve built.',
    },
}

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
