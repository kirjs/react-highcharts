import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();
history.basename = document
  .getElementsByTagName("base")[0]
  .getAttribute("href");

export default history;
