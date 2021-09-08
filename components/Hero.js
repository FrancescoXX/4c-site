import Image from "next/image";

const Hero = ({ eyebrow, title, description, primaryLink, secondaryLink }) => {
  return (
    <section className="container">
      <div className="items-center grid md:grid-cols-3 lg:grid-cols-2 gap-12">
        <div className="col-span-2 lg:col-span-1">
          <p className="text-sm font-bold tracking-wide text-orange-600 uppercase">
            {eyebrow}
          </p>

          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            {title}
          </h1>

          <div className="my-8 text-gray-500 prose-lg">{description}</div>

          <div className="flex flex-wrap justify-center my-8 md:justify-start gap-4">
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
