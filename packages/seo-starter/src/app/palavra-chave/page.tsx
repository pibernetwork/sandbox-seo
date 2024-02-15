import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Link from "@/components/Link";

export default function Page() {
  return (
    <main className="px-4">
      <Header />

      <Banner
        title="Palavra Chave"
        description="Esse é o meu texto sobre a palavra chave.
        A palavra chave é muito importante para o SEO.
        Devemos cuidar da palavra chave."
      />

      <section className="p-4 bg-green-900">
        <h2 className="font-medium text-2xl">Veja mais:</h2>
        <h3 className="font-medium text-xl">Páginas fixas:</h3>
        <Link href="/palavra-chave/artigo">Artigo</Link>
        <h3 className="font-medium text-xl">Páginas do CMS Keyword:</h3>
        <h3 className="font-medium text-xl">Páginas do CMS Estados:</h3>
      </section>
    </main>
  );
}
