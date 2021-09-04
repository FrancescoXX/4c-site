import React from "react";
import Head from "next/head";

const Seo = ({
  metaTitle,
  metaDescription,
  metaImage,
  url,
  article,
  author,
  lang,
}) => {
  const absoluteUrl = `https://4c.rocks/${url ? url : ""}`;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta lang={lang} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {metaDescription && <meta name="description" content={metaDescription} />}
      <meta name="og:title" content={metaTitle} />
      {metaDescription && (
        <meta name="og:description" content={metaDescription} />
      )}
      <meta name="og:type" content={article ? "article" : "website"} />
      {metaImage && <meta name="og:image" content={metaImage} />}
      {metaImage && <meta name="og:image:alt" content={metaTitle} />}
      <meta name="og:url" content={absoluteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      {author && <meta name="twitter:creator" content={author} />}
      <meta name="twitter:title" content={metaTitle} />
      {metaDescription && (
        <meta name="twitter:description" content={metaDescription} />
      )}
      {metaImage && <meta name="twitter:image" content={metaImage} />}
      {metaImage && <meta name="twitter:image:alt" content={metaTitle} />}
    </Head>
  );
};

export default Seo;
