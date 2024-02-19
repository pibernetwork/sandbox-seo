import slugify from 'slugify';
import { importDb } from '../import';
import { CMSCityItem } from '../types';

function getCities() {
  const db = importDb();

  const cities: CMSCityItem[] = db
    .map((rawState) => {
      const statePart: Partial<CMSCityItem> = {
        stateName: rawState.name,
        stateSlugName: slugify(rawState.name, { lower: true }),
        stateAcronym: rawState.acronym,
        stateSlugAcronym: slugify(rawState.acronym, { lower: true }),
        stateIn: rawState.in,
        stateOf: rawState.of,
      };

      return rawState.cities.map((city) => {
        return {
          ...(statePart as CMSCityItem),
          slug: slugify(city.name, { lower: true }),
          city: city.name,
          in: city.in,
          of: city.of,
        } satisfies CMSCityItem;
      });
    })
    .flat();

  return cities;
}

export async function getCitiesPages(prefix: string) {
  const cities = await getCities();
  return cities.map(
    (city) => `${prefix}/${city.stateSlugAcronym}/${city.slug}`,
  );
}

export async function getCityBySlug(slug: string) {
  const cities = await getCities();
  const city = cities.find((cmsCity) => cmsCity.slug === slug);
  if (!city) {
    throw new Error(`CMS Item city with slug ${slug} not found`);
  }
  return city;
}

export async function getStateCities(stateNameOrAcronym: string) {
  const cities = await getCities();

  const stateCities = cities.filter(
    (city) =>
      city.stateName === stateNameOrAcronym ||
      city.stateAcronym === stateNameOrAcronym,
  );

  return stateCities;
}
