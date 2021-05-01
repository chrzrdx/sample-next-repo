import Link from "next/link"
import Image from "next/image"

export default function NavBar({
  links = [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
  ],
}) {
  return (
    <header className="navbar">
      <Link href="/">
        <Image src="/vercel.svg" height={20} width={80} />
      </Link>
      <nav>
        <ul>
          {links.map(({ href, name }) => (
            <li key={href}>
              <Link href={href}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
