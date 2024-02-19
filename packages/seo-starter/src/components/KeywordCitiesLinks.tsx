import LinksInlineList from '@/components/Layout/LinkInlineList';
import { getStateCities } from '@/data/cms/collections/cities';

export default async function KeywordCitiesLinks({
  keyword,
  stateSlug,
}: {
  keyword: string;
  stateSlug: string;
}) {
  const cities = await getStateCities(stateSlug);

  const links = cities.map((city) => ({
    href: `/${keyword}/${city.stateSlugAcronym}/${city.slug}`,
    label: city.city,
  }));

  return <LinksInlineList links={links} />;
}
