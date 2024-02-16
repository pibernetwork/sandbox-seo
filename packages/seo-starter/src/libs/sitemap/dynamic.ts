import { getCityPages } from "@/data/csv/seo/cities";
import { getKeywordPages } from "@/data/csv/seo/keywords";
import { getStatePages } from "@/data/csv/seo/states";

export async function getDynamicPages() {
  const keywordPages = await getKeywordPages("palavra-chave");
  const statePages = await getStatePages("palavra-chave");
  const cityPages = await getCityPages("palavra-chave");
  return [...keywordPages, ...statePages, ...cityPages];
}
