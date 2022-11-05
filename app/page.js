import Link from "next/link";
export default function Main() {
    return (
        <div>
            <h1>Hello, world!</h1>
            {/* Very surprisingly, there is no errro if you remove this Link */}
            {/* Try clicking on this link in the homepage, and refresh your browser */}
            <Link href="/sell">Sell</Link>
        </div>
    );
}
