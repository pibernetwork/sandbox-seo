import { getCities } from "../import/cities";

export async function getCityPages(prefix: string) {
  const cities = await getCities();
  return cities.map((city) => `${prefix}/${city.uf}/${city.slug}`);
}
