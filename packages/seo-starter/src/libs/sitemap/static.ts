import { globby } from 'globby';

export async function getStaticPages() {
  const entries = await globby(['**/page.tsx']);

  const staticPages = entries
    .filter((entry) => !entry.includes('['))
    .map((entry) => {
      return entry
        .replace('src/app/', '')
        .replace('/page.tsx', '')
        .replace('page.tsx', '');
    });

  return staticPages;
}
