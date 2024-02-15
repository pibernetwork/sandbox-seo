import { State } from "@/data/csv/types";

export default function StatePage({ state }: { state: State }) {
  return <div>State {state.name}</div>;
}
