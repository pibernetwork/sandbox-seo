import Banner from "@/components/Banner";
import KeywordStatesLinks from "@/components/KeywordStatesLinks";
import Link from "@/components/Link";

import { getKeywords } from "@/data/cms/collections/keywords";

export default async function Page() {
  // const states = await getUfs();
  const keywords = await getKeywords();
  // const capitals = await getCapitals();

  return (
    <>
      <Banner
        title="Palavra Chave"
        description="Esse é o meu texto sobre a palavra chave.
        A palavra chave é muito importante para o SEO.
        Devemos cuidar da palavra chave."
      />

      <KeywordStatesLinks keyword="palavra-chave" />

      <section className="p-4 bg-green-900">
        <h2 className="font-medium text-2xl text-center">Veja mais:</h2>

        <h3 className="font-medium text-xl">Páginas fixas:</h3>
        <div className="flex">
          <div className="inline-block mx-4">
            <Link href="/palavra-chave/artigo">Artigo</Link>
          </div>
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-100"></hr>
        <h3 className="font-medium text-xl">Páginas do CMS Keyword:</h3>
        <div className="flex">
          {keywords.map((keyword) => (
            <div className="inline-block mx-4" key={keyword.slug}>
              <Link href={`/palavra-chave/${keyword.slug}`}>
                {keyword.name}
              </Link>
            </div>
          ))}
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-100"></hr>
        {/* <h3 className="font-medium text-xl">Páginas do CMS Estados:</h3>
        <div className="flex flex-wrap">
          {states.map((state) => (
            <div className="inline-block mx-4" key={state.slug}>
              <Link href={`/palavra-chave/${state.slug}`}>{state.name}</Link>
            </div>
          ))}
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-100"></hr>
        <h3 className="font-medium text-xl">Páginas do CMS Capitais:</h3>
        <div className="flex flex-wrap">
          {capitals.map((capital) => (
            <div className="inline-block mx-4 my-2" key={capital.slug}>
              <Link href={`/palavra-chave/${capital.uf}/${capital.slug}`}>
                {capital.name}
              </Link>
            </div>
          ))}
        </div> */}
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-100"></hr>
      </section>
    </>
  );
}
