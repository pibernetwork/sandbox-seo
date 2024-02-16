import { CMSKeywordItem } from "@/data/cms/types";

export default function KeywordPage({ keyword }: { keyword: CMSKeywordItem }) {
  return <div>Article {keyword.name}</div>;
}
