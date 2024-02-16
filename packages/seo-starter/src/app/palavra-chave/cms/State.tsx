import KeywordCitiesLinks from "@/components/KeywordCitiesLinks";
import { CMSStateItem } from "@/data/cms/types";

export default function StatePage({ state }: { state: CMSStateItem }) {
  return (
    <>
      <div>State {state.state}</div>
      <KeywordCitiesLinks keyword="palavra-chave" stateSlug={state.acronym} />
    </>
  );
}
