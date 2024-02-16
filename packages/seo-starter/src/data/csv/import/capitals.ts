import { CSVCapital, Capital } from "../types";
import { importFile } from "./utils";

const CMS_FILE = "CMS-Capitals.csv";

async function importCapitals(): Promise<CSVCapital[]> {
  return importFile<CSVCapital[]>(CMS_FILE);
}

function normalizeCapitals(rawCapitals: CSVCapital[]): Capital[] {
  return rawCapitals.map((item) => {
    return {
      name: item.Name,
      slug: item.Slug,
      art1: item.Art1capital,
      art2: item.Art2capital,
      state: item.Estado,
      uf: item.UF,
    } satisfies Capital;
  });
}

export async function getCapitals(): Promise<Capital[]> {
  const rawCapitals = await importCapitals();
  return normalizeCapitals(rawCapitals);
}
