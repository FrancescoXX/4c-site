import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "./Header";
import config from "../4c.config";

const Layout = ({ header, children, ...rest }) => {
  return (
    <div className="min-h-screen bg-orange-50">
      <Header {...header} />
      <Head>
        <link rel="icon" href={config.favicon} />
      </Head>
      <NextSeo
        title={config.title.short}
        description={config.description.short}
        canonical={config.url}
        openGraph={{
          url: config.url,
          title: config.title.long,
          description: config.description.long,
          images: [
            {
              url: config.logo,
              width: 432,
              height: 432,
              alt: config.title.short,
              type: "image/jpeg",
            },
          ],
          site_name: config.siteName,
        }}
      />
      <main {...rest}>{children}</main>
    </div>
  );
};

export default Layout;
