export default function Banner({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="my-4 mx-2 bg-yellow-400 text-black p-4">
      <h2 className="text-5xl text-center">{title}</h2>
      <p className="text-center mt-8">{description}</p>
    </article>
  );
}
