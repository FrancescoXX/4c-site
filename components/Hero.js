import Image from "next/image";

const Hero = ({ eyebrow, title, description, primaryLink, secondaryLink }) => {
  return (
    <section className="container">
      <div className="grid md:grid-cols-3 lg:grid-cols-2 items-center gap-12">
        <div className="col-span-2 lg:col-span-1">
          <p className="text-sm text-orange-600 font-bold tracking-wide uppercase">
            {eyebrow}
          </p>

          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            {title}
          </h1>

          <div className="prose-lg text-gray-500 my-8">{description}</div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 my-8">
            {primaryLink}
            {secondaryLink}
          </div>
        </div>
        <div className="hidden lg:block transform lg:scale-110 md:translate-x-24">
          <Image src="/g10.png" alt="" width={1200} height={1369} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
