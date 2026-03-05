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
          <p>hello@profirstevents.com</p>
          <p>+1 (555) 017-2234</p>
          <p>New York, United States</p>
        </div>

        <div className="flex items-center gap-3 md:justify-end">
          {["Instagram", "Facebook", "LinkedIn"].map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-full border border-black/15 bg-white/70 px-4 py-2 text-xs uppercase tracking-wide text-ivory/75 transition hover:border-gold/40 hover:text-gold"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
