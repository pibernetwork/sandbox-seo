import { CSVCapital, NormalizeCapital } from '../types.js';
import { importFile } from './utils.js';

const CMS_FILE = 'CMS-Capitais.csv';

async function importCapitals(): Promise<CSVCapital[]> {
  return importFile<CSVCapital[]>(CMS_FILE);
}

function normalizeCapitals(rawCapitals: CSVCapital[]): NormalizeCapital[] {
  return rawCapitals.map((item) => {
    return {
      name: item.Name,
      slug: item.Slug,
      art1: item.Art1capital,
      art2: item.Art2capital,
      state: item.Estado,
      uf: item.UF,
    } satisfies NormalizeCapital;
  });
}

export async function getCapitals(): Promise<NormalizeCapital[]> {
  const rawCapitals = await importCapitals();
  return normalizeCapitals(rawCapitals);
}
