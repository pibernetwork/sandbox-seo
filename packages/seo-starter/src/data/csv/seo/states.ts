import { getUfs } from "../import/uf";

export async function getStatePages(prefix: string) {
  const states = await getUfs();

  return states.map((state) => `${prefix}/${state.slug}`);
}
