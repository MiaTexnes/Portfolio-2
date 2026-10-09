import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto my-10 max-w-3xl rounded-3xl bg-white px-6 py-16 text-[#1c1c1f] shadow-sm dark:border dark:border-white/10 dark:bg-[#16181e] dark:text-white dark:shadow-none"
    >
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-[#3f3f46] dark:text-[#d4d4d8]">
        That address is not one of the three projects.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-sm text-[#4f46e5] underline underline-offset-4"
      >
        Back home
      </Link>
    </main>
  );
}
