import Link from "../Link";

export default function LinksInlineList({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <div className="">
      {links.map(({ href, label }) => (
        <div className="block mx-4" key={label}>
          <Link href={href}>{label}</Link>
        </div>
      ))}
    </div>
  );
}
