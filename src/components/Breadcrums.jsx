import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const formatLabel = (segment) =>
  segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

export default function Bread() {
  const { pathname } = useLocation();

  if (pathname === "/" || pathname.startsWith("/login")) return null;

  const segments = pathname.split("/").filter(Boolean);
  let path = "";

  return (
    <nav className="fixed  bg-[#D32F2F]  right-0 z-40 w-full px-4 py-2 " style={{display:"flex",flexDirection:"row-reverse"}}>
      <ol className="flex items-center text-sm text-white">
        <li>
          <Link to="/" className="flex items-center">
            <FaHome className="mr-1" /> Home
          </Link>
        </li>

        {segments.map((seg, i) => {
          path += `/${seg}`;
          const isLast = i === segments.length - 1;

          return (
            <li key={path} className="flex items-center">
              <span className="mx-2">›</span>
              {isLast ? (
                <span className="font-semibold text-black-600">
                  {formatLabel(seg)}
                </span>
              ) : (
                <Link to={path}>{formatLabel(seg)}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
