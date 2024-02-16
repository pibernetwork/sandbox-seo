import Banner from "@/components/Banner";
import Link from "@/components/Link";
import StaticLinks from "@/components/StaticLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Stater - Best SEO Strategy on internet",
  description: "We're going to try to find the best seo strategy",
};

export default async function Home() {
  return (
    <>
      <Banner title="SEO Starter" description="Meu site sobre alguma coisa." />

      <section className="p-4 bg-green-900">
        <h2 className="font-medium text-2xl">Veja mais:</h2>
        <Link href="/palavra-chave">Palavra Chave</Link>
        <h2 className="font-medium text-2xl">Veículos:</h2>
        <StaticLinks />
      </section>
    </>
  );
}
