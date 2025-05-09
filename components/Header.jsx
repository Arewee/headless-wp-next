import Link from "next/link"


function Header() {
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
            <details>
            <summary>More</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                  <Link href="/tailwind">Tailwind</Link>
                  </li>
                  <li>
                  <Link href="/daisyui">DaisyUI</Link>
                  </li>
                  <li>
                  <Link href="/about">About Us</Link>
                  </li>
                  <li>
                  <Link href="/blog">Blog</Link>
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