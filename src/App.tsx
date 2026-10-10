import { useState, useEffect } from 'react';
import { routeMetadata } from './data/siteData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ParentsPage } from './pages/ParentsPage';
import { TutorsPage } from './pages/TutorsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPortalPage } from './pages/AdminPortalPage';

function SeoManager({ route }: { route: string }) {
  useEffect(() => {
    const t = routeMetadata[route] || routeMetadata['/'];
    document.title = t.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', t.description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', t.canonical);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t.description);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', t.title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', t.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', t.canonical);

    // Dynamic Route Breadcrumb Schema
    let breadcrumbScript = document.getElementById('route-breadcrumb-schema');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.setAttribute('type', 'application/ld+json');
      breadcrumbScript.setAttribute('id', 'route-breadcrumb-schema');
      document.head.appendChild(breadcrumbScript);
    }

    const breadcrumbs = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://naveen-home-tuitions.ai.studio/',
      },
    ];

    if (route !== '/') {
      breadcrumbs.push({
        '@type': 'ListItem',
        position: 2,
        name: t.h1,
        item: t.canonical,
      });
    }

    breadcrumbScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs,
    });
  }, [route]);

  return null;
}

export function parseCurrentRoute(): string {
  if (typeof window === 'undefined') return '/';

  // 1. Normalized pathname (lowercase, trimmed, strip trailing slashes)
  const rawPath = window.location.pathname.toLowerCase().trim();
  const normalized = rawPath.replace(/\/+$/, '') || '/';

  const validRoutes = ['/about', '/parents', '/tutors', '/how-it-works', '/contact', '/admin'];
  for (const r of validRoutes) {
    if (normalized === r || normalized.endsWith(r)) {
      return r;
    }
  }

  // 2. Query parameters fallback (?page=admin, ?tab=admin, ?admin, etc.)
  const search = window.location.search.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const pageParam = (params.get('page') || params.get('route') || params.get('tab') || '').toLowerCase();
  for (const r of validRoutes) {
    const rKey = r.replace('/', '');
    if (pageParam === rKey || pageParam === r) {
      return r;
    }
  }
  if (params.has('admin') || search.includes('admin')) {
    return '/admin';
  }

  // 3. Hash routing fallback (#/admin, #admin, #about, etc.)
  const rawHash = (window.location.hash || '').toLowerCase().replace(/^#\/?/, '').replace(/\/+$/, '');
  for (const r of validRoutes) {
    const rKey = r.replace('/', '');
    if (rawHash === rKey || rawHash === r) {
      return r;
    }
  }

  return '/';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => parseCurrentRoute());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(parseCurrentRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (newRoute: string) => {
    if (currentRoute !== newRoute) {
      window.history.pushState({}, '', newRoute);
      setCurrentRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (currentRoute === '/admin') {
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        <SeoManager route="/admin" />
        <AdminPortalPage onNavigate={navigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#101828] selection:bg-blue-100 selection:text-blue-900">
      <SeoManager route={currentRoute} />
      <Navbar currentRoute={currentRoute} onNavigate={navigate} />
      <div className="flex-1">
        {currentRoute === '/' && <HomePage onNavigate={navigate} />}
        {currentRoute === '/about' && <AboutPage onNavigate={navigate} />}
        {currentRoute === '/parents' && <ParentsPage onNavigate={navigate} />}
        {currentRoute === '/tutors' && <TutorsPage onNavigate={navigate} />}
        {currentRoute === '/how-it-works' && <HowItWorksPage onNavigate={navigate} />}
        {currentRoute === '/contact' && <ContactPage onNavigate={navigate} />}
      </div>
      <Footer onNavigate={navigate} />
      <FloatingWhatsApp />
    </div>
  );
}
