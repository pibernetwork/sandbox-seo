import LinksInlineList from "@/components/Layout/LinkInlineList";
import { getStatesAcronymSlug } from "@/data/cms/collections/states";

export default async function KeywordStatesLinks({
  keyword,
}: {
  keyword: string;
}) {
  const states = await getStatesAcronymSlug();

  const links = states.map((state) => ({
    href: `${keyword}/${state.slug}`,
    label: state.state,
  }));

  return <LinksInlineList links={links} />;
}
