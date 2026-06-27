import { MetadataRoute } from 'next';
import { getAllPages } from '@/lib/puck-store';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.express-entruempelungen.de';
  
  // Static Routes
  const routes = ['', '/impressum', '/datenschutz'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.5,
  }));

  // Dynamic Landing Pages from JSON Data
  const dynamicPages = await getAllPages();
  const dynamicRoutes = dynamicPages
    .filter(slug => slug !== 'index') // Index is already covered by ''
    .map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: 0.8,
  }));

  return [...routes, ...dynamicRoutes];
}
