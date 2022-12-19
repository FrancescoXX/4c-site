const Main = ({ eyebrow, title, description, primaryLink, twitterLink }) => {
  return (
    <div className="flex items-center justify-center">
      <section className="container mt-[4em] mb-[4em] max-w-bodyContainer p-[2em]  md:mb-[0em]">
        <div className="grid items-center gap-12 md:grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1">
            <p className="hidden text-2xl font-bold uppercase tracking-wide text-white md:block">
              {eyebrow}
            </p>

            <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
              {title}
            </h1>

            <div className="prose-lg my-8 mx-[auto] text-slate-200">
              {description}
            </div>

            <ul className="my-8 flex flex-col content-center flex-wrap gap-4 md:flex-row md:justify-start">
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
    </div>
  );
};

export default Main;
