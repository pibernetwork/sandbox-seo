import Banner from '@/components/Banner';
import KeywordCitiesLinks from '@/components/KeywordCitiesLinks';
import { CMSStateItem } from '@/data/cms/types';

export default function StatePage({ state }: { state: CMSStateItem }) {
  return (
    <>
      <Banner
        title={`Palavra chave ${state.in} ${state.state}`}
        description={`A melhor palavra chave ${state.of} ${state.acronym}`}
      />

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
