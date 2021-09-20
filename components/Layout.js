import Header from "./Header";
// import { Footer } from "../Footer";

const Layout = ({ header, children, ...rest }) => {
  return (
    <>
      <Header {...header} />
      <main {...rest}>{children}</main>
      {/* <Footer {...footer} /> */}
    </>
  );
};

export default Layout;
