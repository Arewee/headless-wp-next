import Link from "next/link"


function Header() {
  return (
    <div className="header-container wrapper">
      <nav className="nav-container padder flex gap-4 justify-end">
            <Link className="link home-link mr-auto"href="/">Home</Link>
            <Link className="link" href="/about">About Us</Link>
            <Link className="link" href="/contact">Contact Us</Link>
            <Link className="link text-red-50" href="/blog">Blog</Link>


      </nav>
    </div>
  )
}
export default Header