import { getCitiesPages } from '@/data/cms/collections/cities';
import { getKeywordPages } from '@/data/cms/collections/keywords';
import { getUFPages } from '@/data/cms/collections/states';

export async function getDynamicPages(keyword: string) {
  const keywordPages = await getKeywordPages(keyword);
  const ufPages = await getUFPages(keyword);
  const cityPages = await getCitiesPages(keyword);
  return [...keywordPages, ...cityPages, ...ufPages];
}
