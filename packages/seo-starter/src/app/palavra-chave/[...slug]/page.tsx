import {
  getCityBySlug,
  getKeywordsBySlug,
  getStateBySlug,
} from "@/data/csv/import-csv";
import { City, Keyword, State } from "@/data/csv/types";

interface StatePage {
  type: "state";
  payload: [State];
}

interface CityPage {
  type: "city";
  payload: [State, City];
}

interface ArticlePage {
  type: "article";
  payload: [Keyword];
}

interface ErrorPage {
  type: "error";
  error: string;
}

type Pages = StatePage | CityPage | ArticlePage | ErrorPage;

async function getPage(slug: string[]): Promise<Pages> {
  const [stateOrKeywordSlug, citySlug] = slug;

  const state = await getStateBySlug(stateOrKeywordSlug);
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
    payload: [state as State, city],
  };
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const page = await getPage(params.slug);

  switch (page.type) {
    case "article": {
      const [article] = page.payload;
      return <div>Article {article.name}</div>;
    }
    case "city": {
      const [state, city] = page.payload;
      return (
        <div>
          City {state.name} - {city.name}
        </div>
      );
    }
    case "state": {
      const [state] = page.payload;
      return <div>State {state.name}</div>;
    }
    case "error": {
      const error = page.error;
      return <div>Error {error}</div>;
    }
  }
}
