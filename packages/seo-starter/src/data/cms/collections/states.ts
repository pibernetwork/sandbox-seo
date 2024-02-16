import slugify from "slugify";
import { importDb } from "../import";
import { CMSStateItem } from "../types";

export function getStatesNameSlug() {
  const db = importDb();

  const states: CMSStateItem[] = db.map((rawState) => {
    return {
      in: rawState.in,
      of: rawState.of,
      acronym: rawState.acronym,
      state: rawState.name,
      slug: slugify(rawState.name, { lower: true }),
    } satisfies CMSStateItem;
  });

  return states;
}

export function getStatesAcronymSlug() {
  const db = importDb();

  const states: CMSStateItem[] = db.map((rawState) => {
    return {
      in: rawState.in,
      of: rawState.of,
      acronym: rawState.acronym,
      state: rawState.name,
      slug: slugify(rawState.acronym, { lower: true }),
    } satisfies CMSStateItem;
  });

  return states;
}

export async function getStatesPages(prefix: string) {
  const states = await getStatesNameSlug();

  return states.map((state) => `${prefix}/${state.slug}`);
}

export async function getUFPages(prefix: string) {
  const states = await getStatesAcronymSlug();

  return states.map((state) => `${prefix}/${state.slug}`);
}

export async function getStateByAcronymSlug(slug: string) {
  const states = getStatesAcronymSlug();
  const state = states.find((cmsState) => cmsState.slug === slug);
  // if (!state) {
  //   throw new Error(`CMS Item state with slug ${slug} not found`);
  // }
  return state || null;
}

export async function getStateByNameSlug(slug: string) {
  const states = getStatesNameSlug();
  const state = states.find((cmsState) => cmsState.slug === slug);
  // if (!state) {
  //   throw new Error(`CMS Item state with slug ${slug} not found`);
  // }
  return state || null;
}
