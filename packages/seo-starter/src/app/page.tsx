import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Link from "@/components/Link";
import { getCapitals, getCities, getStates } from "@/data/csv/import-csv";

export default async function Home() {
  const states = await getStates();
  const cities = await getCities();
  const capitals = await getCapitals();

  return (
    <main className="min-h-screen p-12">
      <Header />

      <Banner title="SEO Starter" description="Meu site sobre alguma coisa." />

      <section className="p-4 bg-green-900">
        <h2 className="font-medium text-2xl">Veja mais:</h2>
        <Link href="/palavra-chave">Palavra Chave</Link>
      </section>
      {/* <ul>
          {states.map((state) => {
            return (
              <li key={state.slug}>
                <Link href={`/palavra-chave/${state.slug}`}>{state.name}</Link>
              </li>
            );
          })}
        </ul> */}

      {/* <pre>{JSON.stringify(states[0], null, 2)}</pre>
      <pre>{JSON.stringify(cities[0], null, 2)}</pre>
      <pre>{JSON.stringify(capitals[0], null, 2)}</pre> */}
    </main>
  );
}
