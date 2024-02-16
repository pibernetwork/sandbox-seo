import { Keyword } from "../types";

export async function getKeywordPages(prefix: string) {
  const keywords = await getKeywords();
  return keywords.map((keyword) => `${prefix}/${keyword.slug}`);
}

const keywords: Keyword[] = [
  { name: "Keyword 1", slug: "keyword-one" },
  { name: "Keyword 2", slug: "keyword-two" },
  { name: "Keyword 3", slug: "keyword-three" },
  { name: "Keyword 4", slug: "keyword-four" },
  { name: "Keyword 5", slug: "keyword-five" },
];

export function getKeywords() {
  return keywords;
}

export function getKeywordsBySlug(slug: string): Keyword | null {
  const keywords = getKeywords();
  const keyword = keywords.find((keyword) => keyword.slug === slug);
  return keyword || null;
}
