export default function Footer() {
  return (
    <footer className="border-t border-[#ececf1] px-6 py-6 text-sm text-[#6b7280] dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <p>Mia Texnes</p>
        <a
          href="https://github.com/MiaTexnes"
          className="text-[#1c1c1f] no-underline dark:text-white"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
