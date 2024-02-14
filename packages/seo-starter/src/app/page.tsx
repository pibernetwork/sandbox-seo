import { getCapitals, getCities, getStates } from "@/data/csv/import-csv";
import Link from "next/link";

export default async function Home() {
  const states = await getStates();
  const cities = await getCities();
  const capitals = await getCapitals();

  return (
    <main className="min-h-screen p-12">
      <div>
        <h1>Links States 1</h1>
        <ul>
          {states.map((state) => {
            return (
              <li key={state.slug}>
                <Link href={`/palavra-chave/${state.slug}`}>{state.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <pre>{JSON.stringify(states[0], null, 2)}</pre>
      <pre>{JSON.stringify(cities[0], null, 2)}</pre>
      <pre>{JSON.stringify(capitals[0], null, 2)}</pre>
    </main>
  );
}
