import cx from "classnames";
import NextLink from "next/link";

export default function Link({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className: string;
}) {
  return (
    <NextLink
      className={cx(
        className,
        'font-medium text-blue-600 dark:text-blue-500 hover:underline"'
      )}
      href={href}
    >
      {children}
    </NextLink>
  );
}
