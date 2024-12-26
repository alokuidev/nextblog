import Link from "next/link";
import "./index.css";

export default function Home() {
  return (
    <div className="linkcontainer">
      <Link href="/productList">Go To Product Page</Link>
    </div>
  );
}
