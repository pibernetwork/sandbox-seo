import { getPages } from '@/libs/sitemap/pages';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getPages();

  return pages.map((page) => {
    return {
      url: `${process.env.SITE_URL}${page ? `/${page}` : ''}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    };
  });
}
