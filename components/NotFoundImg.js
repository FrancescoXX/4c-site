import { useEffect, useState } from "react";
const NotFoundImg = ({ src, ...rest }) => {
  const notfound =
    "https://raw.githubusercontent.com/devvsakib/random-image-for-thumbnail/main/Screenshot_2.png";
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      {...rest}
      src={imgSrc ? imgSrc : notfound}
      onError={() => {
        setImgSrc(notfound);
      }}
      alt="Picture of the author"
      loading="lazy"
      priority
    />
  );
};
export default NotFoundImg;
