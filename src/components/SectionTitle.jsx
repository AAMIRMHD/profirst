import Reveal from "./Reveal";

function SectionTitle({ eyebrow, title, description }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-gold/80">
        {eyebrow}
      </p>
      <h2 className="mb-4 font-display text-4xl font-semibold leading-tight text-ivory md:text-5xl">
        {title}
      </h2>
      <p className="text-base text-ivory/70 md:text-lg">{description}</p>
    </Reveal>
  );
}

export default SectionTitle;
