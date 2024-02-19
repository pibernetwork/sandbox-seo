import { CSVState, NormalizeState } from '../types.js';
import { importFile } from './utils.js';

const CMS_FILE = 'CMS-Estados.csv';
async function importStates(): Promise<CSVState[]> {
  return importFile<CSVState[]>(CMS_FILE);
}

function normalizeStates(rawStates: CSVState[]): NormalizeState[] {
  return rawStates.map((state) => {
    return {
      name: state.Name,
      slug: state.Slug,
      art1: state.Art1uf,
      art2: state.Art2uf,
      uf: state.UF,
      capital: state.Capital,
    } satisfies NormalizeState;
  });
}

export async function getStates(): Promise<NormalizeState[]> {
  const rawStates = await importStates();
  return normalizeStates(rawStates);
}

export async function getStateBySlug(
  uf: string,
): Promise<NormalizeState | null> {
  const states = await getStates();
  const state = states.find((state) => state.slug === uf);
  return state || null;
}
