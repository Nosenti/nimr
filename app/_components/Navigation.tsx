import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/overview" className="hover:text-accent-400 transition-colors">
            Overview
          </Link>
        </li>
        <li>
          <Link href="/deliveries" className="hover:text-accent-400 transition-colors">
            Deliveries
          </Link>
        </li>
        <li>
          <Link
            href="/patients"
            className="hover:text-accent-400 transition-colors"
          >
            Patients
          </Link>
			  </li>
			  <li>
          <Link
            href="/dispatch"
            className="hover:text-accent-400 transition-colors"
          >
            Dispatch riders
          </Link>
        </li>
        <li>
          <Link
            href="/admin"
            className="hover:text-accent-400 transition-colors"
          >
            Admin
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}
