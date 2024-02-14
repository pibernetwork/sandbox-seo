import { getStateBySlug } from "@/data/csv/import-csv";

export default async function Page({ params }: { params: { slug: string } }) {
  const state = await getStateBySlug(params.slug);

  if (!state) {
    throw new Error("Missing state");
  }

  return (
    <div>
      <h1>
        Palavra-chave {state.art1} {state.state}.
      </h1>
      <p>
        A melhor palavra chave {state.art2} {state.state}.
      </p>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </div>
  );
}
