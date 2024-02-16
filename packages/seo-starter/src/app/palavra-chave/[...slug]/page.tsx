import { getKeywordsBySlug } from "@/data/cms/collections/keywords";

import { getCityBySlug } from "@/data/cms/collections/cities";
import { getStateByAcronymSlug } from "@/data/cms/collections/states";
import { CMSCityItem, CMSKeywordItem, CMSStateItem } from "@/data/cms/types";
import CityPage from "../cms/City";
import KeywordPage from "../cms/Keyword";
import StatePage from "../cms/State";

interface StatePage {
  type: "state";
  payload: [CMSStateItem];
}

interface CityPage {
  type: "city";
  payload: [CMSStateItem, CMSCityItem];
}

interface ArticlePage {
  type: "article";
  payload: [CMSKeywordItem];
}

interface ErrorPage {
  type: "error";
  error: string;
}

type Pages = StatePage | CityPage | ArticlePage | ErrorPage;

async function getPage(slug: string[]): Promise<Pages> {
  const [stateOrKeywordSlug, citySlug] = slug;

  const state = await getStateByAcronymSlug(stateOrKeywordSlug);
  const keyword = await getKeywordsBySlug(stateOrKeywordSlug);

  if (!state && !keyword) {
    return {
      type: "error",
      error: "State or Keyword not found",
    };
  }

  if (keyword) {
    return {
      type: "article",
      payload: [keyword],
    };
  }

  if (state && !citySlug) {
    return {
      type: "state",
      payload: [state],
    };
  }

  const city = await getCityBySlug(citySlug);

  if (!city) {
    return {
      type: "error",
      error: "City not found",
    };
  }

  return {
    type: "city",
    payload: [state as CMSStateItem, city],
  };
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const page = await getPage(params.slug);

  switch (page.type) {
    case "article": {
      const [article] = page.payload;
      return <KeywordPage keyword={article} />;
    }
    case "city": {
      const [state, city] = page.payload;
      return <CityPage state={state} city={city} />;
    }
    case "state": {
      const [state] = page.payload;
      return <StatePage state={state} />;
    }
    case "error": {
      const error = page.error;
      return <div>Error {error}</div>;
    }
  }
}
