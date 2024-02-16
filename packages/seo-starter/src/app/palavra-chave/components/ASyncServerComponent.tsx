import { getUfs } from "@/data/csv/import/uf";

export async function AsyncServerComponent() {
  const states = await getUfs();
  return <>{JSON.stringify(states, null, 2)}</>;
}
