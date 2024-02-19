import LinksInlineList from './Layout/LinkInlineList';

export default function StaticLinks() {
  const links: { href: string; label: string }[] = [
    {
      href: '/carros',
      label: 'Carros',
    },
    {
      href: '/barcos',
      label: 'Barcos',
    },
    {
      href: '/motos',
      label: 'Motos',
    },
  ];

  return <LinksInlineList links={links} />;
}
