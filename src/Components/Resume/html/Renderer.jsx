import {Link} from "react-router-dom";
const View = ({children, style}) => <div style={style}>{children}</div>;
const Text = ({children, style}) => <p style={style}>{children}</p>;
const Links = ({children, src, style}) => (
  <Link to={src} style={style}>
    {children}
  </Link>
);
export {View, Text, Links};
