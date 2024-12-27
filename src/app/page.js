import Link from "next/link";

export default function Home() {
  return (
    <div className="linkcontainer">
      <Link href="/productList">Go To Product Page</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link href="/productlistserver" style={{color:'red'}}>Go To ProductList server Page</Link>
    </div>
  );
}
