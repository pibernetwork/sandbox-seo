import Banner from '@/components/Banner';
import KeywordCitiesLinks from '@/components/KeywordCitiesLinks';
import Section from '@/components/Section';
import { CMSStateItem } from '@/data/cms/types';

export default function StatePage({ state }: { state: CMSStateItem }) {
  return (
    <>
      <Banner
        title={`Palavra chave ${state.in} ${state.state}`}
        description={`A melhor palavra chave ${state.of} ${state.acronym}`}
      />
      <Section
        id="information"
        title={`Informação sobre palavra chave ${state.of} ${state.state} `}
      >
        <p>
          Um texto simples pra mostrar a importância da palavra chave {state.in}{' '}
          {state.acronym}. O povo no estado {state.state} sabe o valor da{' '}
          <a href="/palavra-chave" className="underline text-blue-200">
            palavra chave
          </a>{' '}
          para o SEO.
        </p>
      </Section>
      <div className="p-4">
        <h2 className="text-5xl text-center">
          Cidades {state.of} {state.state} com palavra chave
        </h2>
        <div className="pt-10">
          <KeywordCitiesLinks
            keyword="palavra-chave"
            stateSlug={state.acronym}
          />
        </div>
      </div>
    </>
  );
}
