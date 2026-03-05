function Footer() {
  return (
    <footer className="border-t border-black/10 px-4 pb-10 pt-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 md:items-center">
        <div>
          <p className="font-display text-2xl text-gold">Pro First Events</p>
          <p className="mt-2 text-sm text-ivory/65">
            Turning Moments Into Memories
          </p>
        </div>

        <div className="text-sm text-ivory/70">
          <p>Profirsteventclt@gmail.com</p>
          <p>+91 9946509254</p>
          <p>+91 8891509254</p>
          <p>Kozhikkode,Kerala,India</p>
        </div>

        <div className="flex items-center gap-3 md:justify-end">
          <a
            href="https://www.instagram.com/profirstevents?igsh=YTR4aWp0MmNiaGk1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-4 py-2 text-xs uppercase tracking-wide text-ivory/75 transition hover:border-gold/40 hover:text-gold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.8 2.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
