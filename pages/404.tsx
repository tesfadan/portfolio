import Link from "next/link";

export default function Custom404() {
  return (
    <main className="home" aria-labelledby="not-found-title">
      <h1 id="not-found-title" className="name">
        404
      </h1>
      <p className="summary">This page does not exist or has moved.</p>
      <p className="contact">
        <Link href="/">Return Home</Link>
      </p>
    </main>
  );
}
