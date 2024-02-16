import Link from "../Link";

export default function LinksInlineList({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <div className="flex flex-wrap">
      {links.map(({ href, label }) => (
        <div className="inline-block mx-4" key={label}>
          <Link href={href}>{label}</Link>
        </div>
      ))}
    </div>
  );
}
