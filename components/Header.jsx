import Link from "next/link"
import {useRef} from "react"


function Header() {

      const dropdownRef = useRef();

      const handleLinkClick = () => {
            if (dropdownRef.current?.open) {
                  dropdownRef.current.open = false;
            }
      };

  return (

      // DAISYUI HEADER - NAVBAR
      <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
      <Link href="/" className="btn btn-ghost text-xl">HOME</Link>
      </div>
      <div className="flex-none">
      <ul className="menu menu-horizontal px-1">

            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
            <Link href="/contact">Contact Us</Link>
            </li>

            <li>
            <details ref={dropdownRef}>
            <summary>More</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                  <Link href="/tailwind" onClick={handleLinkClick}>Tailwind</Link>
                  </li>
                  <li>
                  <Link href="/daisyui" onClick={handleLinkClick}>DaisyUI</Link>
                  </li>
                  <li>
                  <Link href="/about" onClick={handleLinkClick}>About Us</Link>
                  </li>
                  <li>
                  <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
                  </li>
                  <li>
                  <Link href="/shop" onClick={handleLinkClick}>Shop</Link>
                  </li>
            </ul>
            </details>
            </li>
      </ul>
      </div>
</div>
      
//     <div className="header-container wrapper">
//       <nav className="nav-container padder flex gap-4 justify-end">
//             <Link className="link home-link mr-auto"href="/">Home</Link>
//             <Link className="link" href="/contact">Contact Us</Link>
//             <Link className="link" href="/tailwind">Tailwind</Link>
//             <Link className="link" href="/daisyui">DaisyUI</Link>
//             <Link className="link" href="/about">About Us</Link>
//             <Link className="link text-red-50" href="/blog">Blog</Link>


//       </nav>
//     </div>
  )
}
export default Header