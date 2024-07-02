import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(
  <div>Hello Server Side Rendering!</div>
);

console.log(html);