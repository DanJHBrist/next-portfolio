//Remember that component names should always start with a Capital letter.

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/about" style={linkStyle}>
          About Me
        </Link>
        <Link href="/projects" style={linkStyle}>
          My Projects
        </Link>
        <Link href="/contact" style={linkStyle}>
          Contact me
        </Link>
    </div>
)

export default Header