import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

      <ul className="navigation clearfix">
        <li className="dropdown">
          <Link href="/">Home</Link>
          {/* <ul>
                        <li><Link href="/">Home Page One</Link></li>
                        <li><Link href="/index-2">Home Page Two</Link></li>
                        <li><Link href="/index-3">Home Page Three</Link></li>
                        <li><Link href="/onepage">OnePage Home</Link></li>
                    </ul> */}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li className="dropdown">
          <Link href="">Services</Link>
          <ul>
            <li>
              <Link href="/service-details-4">Dubai Golden Visa</Link>
            </li>
            <li>
              <Link href="/service-details-5">Accounting and Bookkeeping</Link>
            </li>
            <li>
              <Link href="/service-details-6">
                Certificate Attestation Services
              </Link>
            </li>
            <li>
              <Link href="/service-details-2">UAE Resident Visa</Link>
            </li>
            <li>
              <Link href="/service-details-3">Business Setup</Link>
            </li>
            <li>
              <Link href="/service-details">PRO Services</Link>
            </li>
            <li>
              <Link href="/service-details-7">Business Consultancy</Link>
            </li>
            <li>
              <Link href="/service-details-8">Bank Account Assistance</Link>
            </li>
          </ul>
        </li>
        {/* <li className="dropdown">
          <Link href="/">Team</Link>
          <ul>
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li>
              <Link href="/team-details">Team Details</Link>
            </li>
          </ul>
        </li> */}
        {/* Pages */}
        {/* <li className="dropdown">
          <Link href="/">Pages</Link>
          <ul>
                        <li className="dropdown"><Link href="/">Blog</Link>
                            <ul>
                                <li><Link href="/blog">Blog Grid</Link></li>
                                <li><Link href="/blog-2">Blog Sidebar</Link></li>
                                <li><Link href="/blog-details">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/tesmonial">Tesmonial</Link></li>
                        <li><Link href="/works">How it works</Link></li>
                        <li><Link href="/chooseus">Why Choose Us</Link></li>
                        <li><Link href="/pricing-table">Pricing-Table</Link></li>
                        <li><Link href="/faq">Faq's</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/appointment">Make Appointment</Link></li>
                        <li><Link href="/error-page">Page Not Found</Link></li>
                        

                    </ul>
        </li> */}
        {/* Contact */}
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
