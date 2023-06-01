import Link from "next/link";

const Header = () => {
  return (
    <header className="container">
      Header
      <Link href="/">Studio</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/contacts">Contacts</Link>
    </header>
  );
};
export { Header };
