import { getStates } from "@/data/csv/import-csv";

export async function AsyncServerComponent() {
  const states = await getStates();
  return <>{JSON.stringify(states, null, 2)}</>;
}
