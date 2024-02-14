import {
  getCityPages,
  getKeywordPages,
  getStatePages,
} from "@/data/csv/import-csv";

export async function getDynamicPages() {
  const keywordPages = await getKeywordPages("palavra-chave");
  const statePages = await getStatePages("palavra-chave");
  const cityPages = await getCityPages("palavra-chave");
  return [...keywordPages, ...statePages, ...cityPages];
}
