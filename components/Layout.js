import Seo from "./SEO";
import Header from "./Header";
// import { Footer } from "../Footer";

const Layout = ({ seo, header, children, ...rest }) => {
  return (
    <>
      <Seo {...seo} />
      <Header {...header} />
      <main {...rest}>{children}</main>
      {/* <Footer {...footer} /> */}
    </>
  );
};

export default Layout;
