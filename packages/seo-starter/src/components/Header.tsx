import Link from "./Link";

export default function Header() {
  return (
    <header className="my-6 mx-2 bg-red-200 text-black p-4">
      <h1>
        <Link href="/">SEO Starter</Link>
      </h1>
    </header>
  );
}
