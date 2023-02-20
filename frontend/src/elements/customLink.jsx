import { Link } from "react-router-dom";
export default function CustomLink({ to, children }) {
  return (
    <Link style={{ color: "inherit", textDecoration: "none" }} to={to}>
      {children}
    </Link>
  );
}
