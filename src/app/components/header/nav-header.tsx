import Link from 'next/link';

export default function NavHeader() {
  return (
    <div className="hidden md:flex md:items-center md:ml-auto">
      <ul className="flex flex-row space-x-8 items-center">
        {/* Link para INÍCIO */}
        <li className="nav-header">
          <Link href="/" className="cursor-pointer">
            INÍCIO
          </Link>
        </li>

        {/* Link para GÊNEROS */}
        <li className="nav-header">
          <Link href="/genres" className="cursor-pointer">
            GÊNEROS
          </Link>
        </li>

        {/* Link para SOBRE */}
        <li className="nav-header">
          <Link href="/about" className="cursor-pointer">
            SOBRE
          </Link>
        </li>

        {/* Link para VÍDEOS */}
        <li className="nav-header">
          <Link href="/videos" className="cursor-pointer">
            VÍDEOS
          </Link>
        </li>

        {/* Link para LOGIN */}
        <li>
          <Link href="/login">
            <div className="btn btn-hover uppercase font-bold py-2 px-6 cursor-pointer">
              <span className="relative z-10">LOGIN</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
