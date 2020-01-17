import Link from 'next/link';


const Header = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/hello">
      <a>Hello</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/shows">
      <a>Shows</a>
    </Link>
    <style jsx>{`
    a {
      color: red;
      margin-right: 15px;
    }
  `}</style>
</div>
)

export default Header;
