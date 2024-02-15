export default function Page() {
  return (
    <main className="px-4">
      <header className="my-6 mx-2 bg-red-200 text-black">
        <h1>SEO Starter</h1>
      </header>
      <nav className="my-4 mx-2 bg-red-300 text-black">
        <h2>Menu</h2>
      </nav>
      <article className="my-4 mx-2 bg-yellow-400 text-black p-4">
        <h2 className="text-5xl text-center">Palavra Chave</h2>
        <p>Banner</p>
        <p>Slider</p>
        <article className="my-4 mx-2 bg-yellow-400 text-black p-4">
          <h3 className="text-4xl">Curiosidades</h3>
          <p>Imagens</p>
        </article>
        <article className="my-4 mx-2 bg-yellow-400 text-black p-4">
          <h3 className="text-4xl">Informações</h3>
          <p>Imagens</p>
        </article>
        <article className="my-4 mx-2 bg-yellow-400 text-black p-4">
          <h3 className="text-4xl">Artigos</h3>
          <p>Imagens</p>
        </article>
        <article className="my-4 mx-2 bg-yellow-400 text-black p-4">
          <h3 className="text-4xl">Encontre Palavra Chave</h3>
          <p>Imagens</p>
        </article>
      </article>
    </main>
  );
}
