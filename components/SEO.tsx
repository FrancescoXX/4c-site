import React, { ReactElement } from "react";

import Head from "next/head";
import { useRouter } from "next/dist/client/router";

export interface SeoProps {
  metaTitle: string;
  metaDescription?: string;
  metaImage?: string;
  isArticle?: boolean;
  author?: string;
  lang?: string;
}

export default function SEO({
  metaTitle,
  metaDescription,
  metaImage,
  isArticle,
  author,
  lang,
}: SeoProps): ReactElement {
  const {pathname, locale} = useRouter();
  const absoluteUrl = `https://4c.rocks/${pathname}`;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta lang={lang || locale} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {metaDescription && <meta name="description" content={metaDescription} />}
      <meta name="og:title" content={metaTitle} />
      {metaDescription && (
        <meta name="og:description" content={metaDescription} />
      )}
      <meta name="og:type" content={isArticle ? "article" : "website"} />
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
}
