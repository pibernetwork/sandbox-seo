import { Uf } from "@/data/csv/types";

export default function StatePage({ state }: { state: Uf }) {
  return <div>State {state.name}</div>;
}
