import { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from "react";
import Seo, { SeoProps } from "./SEO";

import Header from "./Header";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode;
  seo: SeoProps;
}

export default function Layout({ seo, children, ...mainAttributes }: Props): ReactElement {
  return (
    <>
      <Seo {...seo} />
      <Header />
      <main {...mainAttributes}>{children}</main>
    </>
  );
}