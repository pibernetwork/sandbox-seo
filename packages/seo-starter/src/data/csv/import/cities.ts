import { CSVCity, NormalizeCity } from "../types.js";
import { importFile } from "./utils.js";

const CMS_FILE = "CMS-Cidades.csv";

async function importCities(): Promise<CSVCity[]> {
  return importFile<CSVCity[]>(CMS_FILE);
}

function normalizeCities(rawCities: CSVCity[]): NormalizeCity[] {
  return rawCities.map((city) => {
    return {
      name: city.Name,
      slug: city.Slug,
      art1: city.Art1cidade,
      art2: city.Art2cidade,
      city: city.Cidade,
      capital: city.Capital,
      uf: city.Uf,
      state: city.Estado,
    } satisfies NormalizeCity;
  });
}

export async function getCityBySlug(
  slug: string
): Promise<NormalizeCity | null> {
  const cities = await getCities();
  const city = cities.find((city) => city.slug === slug);
  return city || null;
}

export async function getCities() {
  const rawCities = await importCities();
  return normalizeCities(rawCities);
}
