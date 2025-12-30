import {useLocation} from "react-router-dom";
export default function StyledLink() {
  const location = useLocation();
  const linkStyle =
    location.pathname === "/" || location.pathname === "/login" || location.pathname === "/services/consultancy"
      ? {position:"relative"}
      : { position: "relative", paddingTop: "100px" };
  return (
    <div style={linkStyle}></div>
  );
}
