import { CSVUf, Uf } from "../types";
import { importFile } from "./utils";

const CMS_FILE = "CMS-UF.csv";

async function importUfs(): Promise<CSVUf[]> {
  return importFile<CSVUf[]>(CMS_FILE);
}

function normalizeUfs(rawStates: CSVUf[]): Uf[] {
  return rawStates.map((uf) => {
    return {
      name: uf.Name,
      slug: uf.Slug,
      art1: uf.Art1uf,
      art2: uf.Art2uf,
      state: uf.Estado,
      capital: uf.Capital,
    } satisfies Uf;
  });
}

export async function getUfs(): Promise<Uf[]> {
  const rawStates = await importUfs();
  return normalizeUfs(rawStates);
}

export async function getUfBySlug(uf: string): Promise<Uf | null> {
  const states = await getUfs();
  const state = states.find((state) => state.slug === uf);
  return state || null;
}
