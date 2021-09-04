const Hero = ({ eyebrow, title, description, primaryLink, secondaryLink }) => {
  return (
    <section className="container">
      <div className="grid md:grid-cols-2">
        <div>
          <p className="text-sm text-orange-600 font-bold tracking-wide uppercase">
            {eyebrow}
          </p>

          <p className="mt-2 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            {title}
          </p>

          <div className="prose-lg text-gray-500 my-8">{description}</div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 my-8">
            {primaryLink}
            {secondaryLink}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
