const Main = ({ eyebrow, title, description, primaryLink, twitterLink }) => {
  return (
    <section className="container p-[2em] mt-[4em] mb-[4em]  md:mb-[0em]">
      <div className="items-center grid md:grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="col-span-1">
          <p className="hidden md:block text-2xl font-bold tracking-wide text-white uppercase">
            {eyebrow}
          </p>

          <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
            {title}
          </h1>

          <div className="my-8 mx-[auto] text-slate-200 prose-lg">
            {description}
          </div>

          <ul className="flex flex-col md:flex-row flex-wrap my-8 md:justify-start gap-4">
            <li className="self-center break:self-start">{primaryLink}</li>
            <li className="self-center break:self-start">{twitterLink}</li>
          </ul>
        </div>
        <div>
          <iframe
            width="95%"
            height="500"
            frameBorder="0"
            allowtransparency="true"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            src="https://discord.com/widget?id=784142072763383858&theme=dark"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Main;
