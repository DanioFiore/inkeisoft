# Navbar Components

Una collezione completa di componenti di navigazione per il tuo sito web, costruiti con Next.js 15, React 19, Tailwind CSS e Motion.

## Componenti Inclusi

### 1. Navbar Principale (`navbar.tsx`)
Il componente principale della navbar con:
- Layout responsivo
- Supporto per tema chiaro/scuro
- Animazioni fluide
- Menu mobile
- Indicatore di scroll

### 2. Logo (`components/ui/logo.tsx`)
Componente logo configurabile con:
- Animazioni hover
- Tagline opzionale
- Supporto per temi

### 3. Pulsanti di Navigazione (`components/ui/nav-button.tsx`)
Pulsanti per la navigazione con:
- Stato attivo
- Icone opzionali
- Animazioni micro-interazioni

### 4. Link Social (`components/ui/social-link.tsx`)
Link per social media con:
- Tooltip
- Animazioni hover
- Supporto per icone Lucide

### 5. Indicatore di Scroll (`components/ui/scroll-progress.tsx`)
Barra di progresso dello scroll con:
- Animazioni fluide
- Colori personalizzabili
- Posizionamento fisso

### 6. Breadcrumb (`components/ui/breadcrumb.tsx`)
Navigazione breadcrumb con:
- Generazione automatica dal path
- Animazioni staggered
- Icona home

### 7. Ricerca (`components/ui/search.tsx`)
Componente di ricerca con:
- Scorciatoie da tastiera (/)
- Risultati in tempo reale
- Modal responsive

### 8. Centro Notifiche (`components/ui/notification-center.tsx`)
Sistema di notifiche con:
- Contatore non letti
- Tipi di notifica (successo, errore, warning, info)
- Azioni personalizzate

### 9. Menu Contestuale (`components/ui/context-menu.tsx`)
Menu dropdown con:
- Navigazione da tastiera
- Scorciatoie
- Azioni distruttive

### 10. Navigazione Mobile (`components/ui/mobile-navigation.tsx`)
Menu mobile avanzato con:
- Sottomenu espandibili
- Animazioni slide
- Footer con social links

## Configurazione

Tutti i componenti utilizzano un sistema di configurazione centralizzato in `lib/navbar-config.ts`:

```typescript
// Items di navigazione
export const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '/', icon: Home },
  { id: 'about', label: 'About', href: '/about', icon: User },
  { id: 'projects', label: 'Projects', href: '/projects', icon: Briefcase },
  { id: 'blog', label: 'Blog', href: '/blog', icon: BookOpen },
  { id: 'contact', label: 'Contact', href: '/contact', icon: Mail },
]

// Link social
export const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/inkeisoft', icon: Github },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/inkeisoft', icon: Linkedin },
  { id: 'twitter', label: 'Twitter', href: 'https://twitter.com/inkeisoft', icon: Twitter },
]

// Configurazione navbar
export const NAVBAR_CONFIG = {
  height: 64,
  backgroundColor: 'bg-white/80 dark:bg-zinc-950/80',
  borderColor: 'border-zinc-200 dark:border-zinc-800',
  // ... altre opzioni
}
```

## Utilizzo

### Installazione Base

1. Importa la navbar nel tuo layout:

```tsx
import { Navbar } from '@/app/navbar'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  )
}
```

2. Configura i tuoi item di navigazione in `lib/navbar-config.ts`

### Componenti Individuali

Puoi anche utilizzare i componenti singolarmente:

```tsx
import { Logo } from '@/components/ui/logo'
import { SearchBox } from '@/components/ui/search'
import { NotificationCenter } from '@/components/ui/notification-center'

function CustomHeader() {
  return (
    <header className="flex items-center justify-between p-4">
      <Logo />
      <div className="flex items-center gap-4">
        <SearchBox onSearch={handleSearch} />
        <NotificationCenter notifications={notifications} />
      </div>
    </header>
  )
}
```

## Personalizzazione

### Temi e Colori

I componenti supportano automaticamente il tema chiaro/scuro tramite next-themes:

```tsx
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  )
}
```

### Animazioni

Tutte le animazioni utilizzano Motion (framer-motion) e sono configurabili:

```tsx
// Varianti di animazione personalizzate
const customVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}
```

### Responsive Design

I componenti sono completamente responsive:

```tsx
// Breakpoints configurabili
export const THEME_CONFIG = {
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
}
```

## Accessibilità

Tutti i componenti seguono le linee guida WCAG 2.1:

- Supporto per navigazione da tastiera
- Etichette ARIA appropriate
- Contrasti colore sufficienti
- Supporto screen reader

## Performance

- Lazy loading dei componenti
- Ottimizzazioni bundle
- Animazioni hardware-accelerated
- Debouncing per ricerca

## Esempi

Vedi `app/navbar-example.tsx` per esempi completi di utilizzo.

## Dipendenze

- Next.js 15+
- React 19+
- Tailwind CSS 4+
- Motion (framer-motion)
- Lucide React
- next-themes

## Licenza

MIT License - vedi LICENSE file per dettagli.
