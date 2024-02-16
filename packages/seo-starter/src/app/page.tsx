import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Link from "@/components/Link";

export default async function Home() {
  return (
    <main className="min-h-screen p-12">
      <Header />

      <Banner title="SEO Starter" description="Meu site sobre alguma coisa." />

      <section className="p-4 bg-green-900">
        <h2 className="font-medium text-2xl">Veja mais:</h2>
        <Link href="/palavra-chave">Palavra Chave</Link>
      </section>
    </main>
  );
}
