'use client'
import { useState } from 'react'
import { Navbar } from '@/app/navbar'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { SearchBox } from '@/components/ui/search'
import { NotificationCenter } from '@/components/ui/notification-center'
import { ContextMenu } from '@/components/ui/context-menu'
import { MobileNavigation } from '@/components/ui/mobile-navigation'
import { Logo } from '@/components/ui/logo'
import { NavButton } from '@/components/ui/nav-button'
import { SocialLink } from '@/components/ui/social-link'
import { ScrollIndicator } from '@/components/ui/scroll-indicator'
import { Edit, Trash2, Copy, Share, Github, Linkedin, Twitter } from 'lucide-react'

// Example notifications
const exampleNotifications = [
    {
        id: '1',
        type: 'success' as const,
        title: 'Project deployed successfully',
        description: 'Your website is now live at https://inkeisoft.com',
        timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
        read: false,
        action: {
        label: 'View',
        onClick: () => console.log('View project')
        }
    },
    {
        id: '2',
        type: 'info' as const,
        title: 'New team member joined',
        description: 'John Doe has joined your team',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        read: true
    },
    {
        id: '3',
        type: 'warning' as const,
        title: 'Storage limit warning',
        description: 'You are approaching your storage limit',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        read: false,
        action: {
        label: 'Upgrade',
        onClick: () => console.log('Upgrade storage')
        }
    }
]

// Example search function
const exampleSearch = (query: string) => {
    const results = [
        { id: '1', title: 'Home Page', description: 'Welcome to Inkeisoft', href: '/', type: 'page' as const },
        { id: '2', title: 'About Us', description: 'Learn more about our company', href: '/about', type: 'page' as const },
        { id: '3', title: 'Contact', description: 'Get in touch with us', href: '/contact', type: 'page' as const },
        { id: '4', title: 'Building Modern Web Apps', description: 'A guide to modern web development', href: '/blog/modern-web-apps', type: 'post' as const },
        { id: '5', title: 'E-commerce Platform', description: 'Full-stack e-commerce solution', href: '/projects/ecommerce', type: 'project' as const },
    ]
    
    return results.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
    )
}

// Example context menu items
const contextMenuItems = [
    {
        id: 'edit',
        label: 'Edit',
        icon: Edit,
        onClick: () => console.log('Edit clicked'),
        shortcut: '⌘E'
    },
    {
        id: 'copy',
        label: 'Copy',
        icon: Copy,
        onClick: () => console.log('Copy clicked'),
        shortcut: '⌘C'
    },
    {
        id: 'share',
        label: 'Share',
        icon: Share,
        onClick: () => console.log('Share clicked')
    },
    {
        id: 'delete',
        label: 'Delete',
        icon: Trash2,
        onClick: () => console.log('Delete clicked'),
        destructive: true,
        shortcut: '⌘⌫'
    }
]

export default function NavbarExample() {
    const [notifications, setNotifications] = useState(exampleNotifications)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMarkAsRead = (id: string) => {
        setNotifications(prev => 
        prev.map(notification => 
            notification.id === id ? { ...notification, read: true } : notification
        )
        )
    }

    const handleMarkAllAsRead = () => {
        setNotifications(prev => 
        prev.map(notification => ({ ...notification, read: true }))
        )
    }

    const handleClearAll = () => {
        setNotifications([])
    }

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950">
        {/* Scroll Progress Indicator */}
        <ScrollIndicator />
        
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Mobile Navigation */}
        <MobileNavigation 
            isOpen={mobileMenuOpen} 
            onClose={() => setMobileMenuOpen(false)} 
        />
        
        {/* Page Content */}
        <div className="pt-20 pb-10">
            <div className="mx-auto max-w-4xl px-4">
            {/* Breadcrumb */}
            <div className="mb-8">
                <Breadcrumb 
                items={[
                    { label: 'Components', href: '/components' },
                    { label: 'Navigation', href: '/components/navigation' },
                    { label: 'Navbar', href: '/components/navigation/navbar', isActive: true }
                ]}
                />
            </div>
            
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Navbar Components
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400">
                A complete collection of navigation components for your website
                </p>
            </div>
            
            {/* Components Demo */}
            <div className="space-y-12">
                {/* Logo Component */}
                <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    Logo Component
                </h2>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <div className="flex items-center gap-8">
                    <Logo />
                    <Logo showTagline={false} />
                    </div>
                </div>
                </section>
                
                {/* Navigation Buttons */}
                <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    Navigation Buttons
                </h2>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <div className="flex items-center gap-4">
                    <NavButton label="Home" />
                    <NavButton label="About" isActive />
                    <NavButton label="Contact" />
                    </div>
                </div>
                </section>
                
                {/* Social Links */}
                <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    Social Links
                </h2>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <div className="flex items-center gap-4">
                    <SocialLink 
                        icon={Github} 
                        label="GitHub" 
                        href="https://github.com/inkeisoft" 
                    />
                    <SocialLink 
                        icon={Linkedin} 
                        label="LinkedIn" 
                        href="https://linkedin.com/company/inkeisoft" 
                    />
                    <SocialLink 
                        icon={Twitter} 
                        label="Twitter" 
                        href="https://twitter.com/inkeisoft" 
                    />
                    </div>
                </div>
                </section>
                
                {/* Search Box */}
                <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    Search Box
                </h2>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <SearchBox onSearch={exampleSearch} />
                </div>
                </section>
                
                {/* Notification Center */}
                <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    Notification Center
                </h2>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <NotificationCenter
                    notifications={notifications}
                    onMarkAsRead={handleMarkAsRead}
                    onMarkAllAsRead={handleMarkAllAsRead}
                    onClearAll={handleClearAll}
                    />
                </div>
                </section>
                
                {/* Context Menu */}
                <section>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    Context Menu
                </h2>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                    <ContextMenu items={contextMenuItems} />
                </div>
                </section>
            </div>
            
            {/* Usage Examples */}
            <div className="mt-16">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-8">
                Usage Examples
                </h2>
                
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                <h3>Basic Implementation</h3>
                <p>
                    Import the Navbar component and add it to your layout:
                </p>
                <pre className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
                    <code>{`import { Navbar } from '@/app/navbar'

    export default function Layout({ children }) {
    return (
        <div>
        <Navbar />
        <main>{children}</main>
        </div>
    )
    }`}</code>
                </pre>
                
                <h3>Configuration</h3>
                <p>
                    All configuration options are available in the navbar-config.ts file:
                </p>
                <pre className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
                    <code>{`// lib/navbar-config.ts
    export const NAV_ITEMS = [
    { id: 'home', label: 'Home', href: '/', icon: Home },
    { id: 'about', label: 'About', href: '/about', icon: User },
    // ... more items
    ]

    export const SOCIAL_LINKS = [
    { id: 'github', label: 'GitHub', href: 'https://github.com/inkeisoft', icon: Github },
    // ... more links
    ]`}</code>
                </pre>
                
                <h3>Customization</h3>
                <p>
                    You can customize the navbar appearance by modifying the configuration:
                </p>
                <pre className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
                    <code>{`export const NAVBAR_CONFIG = {
    height: 64,
    backgroundColor: 'bg-white/80 dark:bg-zinc-950/80',
    borderColor: 'border-zinc-200 dark:border-zinc-800',
    // ... more options
    }`}</code>
                </pre>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
