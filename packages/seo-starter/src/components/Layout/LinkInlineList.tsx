import Link from '../Link';

export default function LinksInlineList({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <div className="sm:grid sm:gap-2 sm:grid-cols-2 md:grid-cols-4 p-4">
      {links.map(({ href, label }) => (
        <Link className="block" key={href} href={href}>
          {label}
        </Link>
      ))}
    </div>
  );
}
