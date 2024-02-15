import { Keyword } from "@/data/csv/types";

export default function KeywordPage({ keyword }: { keyword: Keyword }) {
  return <div>Article {keyword.name}</div>;
}
