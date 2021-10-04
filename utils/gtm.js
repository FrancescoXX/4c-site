export const GTMPageView = (url) => {
  const pageEvent = {
    event: "pageview",
    page: url,
  };
  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};
