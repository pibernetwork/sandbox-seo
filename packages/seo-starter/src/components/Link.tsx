import NextLink from "next/link";

export default function Link({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <NextLink
      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      href={href}
    >
      {children}
    </NextLink>
  );
}
