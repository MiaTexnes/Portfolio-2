export default function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-[#2A9D8F] bg-white px-6 py-8 dark:border-[#F3D6DC] dark:bg-[#264653]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <p className="font-serif text-lg text-[#264653] dark:text-white">
          Mia Texnes
        </p>
        <a
          href="https://github.com/MiaTexnes"
          className="text-[#2A9D8F] underline underline-offset-4"
        >
          https://github.com/MiaTexnes
        </a>
      </div>
    </footer>
  );
}
