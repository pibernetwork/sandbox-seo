import { getDynamicPages } from "./dynamic";
import { getStaticPages } from "./static";

export async function getPages() {
  const staticPages = await getStaticPages();
  const dynamicPages = await getDynamicPages();

  const pages = [...staticPages, ...dynamicPages].sort((a, b) =>
    a.localeCompare(b)
  );
  return pages;
}
