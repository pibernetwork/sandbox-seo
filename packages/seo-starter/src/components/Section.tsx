export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="bg-green-900 py-4 my-4">
      <h2 className="text-5xl text-center text-white mb-4">{title}</h2>
      <div className="text-center text-md">{children}</div>
    </section>
  );
}
