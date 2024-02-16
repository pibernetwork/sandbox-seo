import { CSVState, State } from "../types";
import { importFile } from "./utils";

const CMS_FILE = "CMS-Estados.csv";
async function importStates(): Promise<CSVState[]> {
  return importFile<CSVState[]>(CMS_FILE);
}

function normalizeStates(rawStates: CSVState[]): State[] {
  return rawStates.map((state) => {
    return {
      name: state.Name,
      slug: state.Slug,
      art1: state.Art1uf,
      art2: state.Art2uf,
      uf: state.UF,
      capital: state.Capital,
    } satisfies State;
  });
}

export async function getStates(): Promise<State[]> {
  const rawStates = await importStates();
  return normalizeStates(rawStates);
}

export async function getStateBySlug(uf: string): Promise<State | null> {
  const states = await getStates();
  const state = states.find((state) => state.slug === uf);
  return state || null;
}
