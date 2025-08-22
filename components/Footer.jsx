'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
  return (
    <footer className="footer bg-gray-800 py-10 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 grid sm:grid-cols-3">
      {/* Brand Section */}
      <aside className="">
        <span className="text-xl font-bold  text-primary">💻 CompuMart</span>
        <p className="text-sm">
          Your trusted computer shop <br /> since 2025
        </p>
      </aside>

      {/* Links Section */}
      <nav className=" sm:mx-auto sm:place-items-center">
        <h6 className="footer-title ">Quick Links</h6>
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "flex items-center gap-1 btn btn-primary"
              : "flex btn btn-ghost hover:border-primary hover:border-2 hover:bg-base-100 hover:text-primary items-center gap-1"
          }`}
        >
          Home
        </Link>
        <Link
          href="/products"
          className={`${
            pathname === "/products"
              ? "flex items-center gap-1 btn btn-primary"
              : "flex btn btn-ghost hover:border-primary hover:border-2 hover:bg-base-100 hover:text-primary items-center gap-1"
          }`}
        >
          Products
        </Link>
        <Link
          href="/dashboard/add-products"
          className={`${
            pathname === "/dashboard/add-product"
              ? "flex items-center gap-1 btn btn-primary"
              : "flex btn btn-ghost hover:border-primary hover:border-2 hover:bg-base-100 hover:text-primary items-center gap-1"
          }`}
        >
          Add Products
        </Link>
      </nav>

      {/* Extra Info Section */}
      <nav className=" sm:ml-auto">
        <h6 className="footer-title">Contact</h6>
        <p>Email: support@compumart.com</p>
        <p>Phone: +880 1234 567890</p>
      </nav>
    </footer>
  );
}
