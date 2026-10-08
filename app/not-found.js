import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl">Page not found</h1>
      <p className="mt-4">That address is not one of the three projects.</p>
      <Link
        href="/"
        className="mt-6 inline-block text-[#2A9D8F] underline underline-offset-4"
      >
        Back home
      </Link>
    </main>
  );
}
