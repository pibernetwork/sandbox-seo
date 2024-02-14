import {
  importCapitals,
  importCities,
  importStates,
} from "@/data/csv/import-csv";

export default async function Home() {
  const states = await importStates();
  const cities = await importCities();
  const capitals = await importCapitals();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{JSON.stringify(states[0], null, 2)}</pre>
      <pre>{JSON.stringify(cities[0], null, 2)}</pre>
      <pre>{JSON.stringify(capitals[0], null, 2)}</pre>
    </main>
  );
}
