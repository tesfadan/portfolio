import Link from "next/link";

export default function Custom404() {
  return (
    <main className="home">
      <p className="summary">
        Page not found. <Link href="/" className="not-found-link">Return home</Link>.
      </p>
    </main>
  );
}
