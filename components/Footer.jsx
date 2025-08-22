"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="footer bg-gray-800 py-10 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 grid sm:grid-cols-3 gap-6 text-white">
      {/* Brand Section */}
      <aside>
        <span className="text-2xl font-bold text-error">
          💻 Next<span className="text-primary">PC</span>
        </span>
        <p className="text-sm mt-2">
          Your trusted computer shop <br /> since 2025
        </p>
      </aside>

      {/* Links Section */}
      <nav className="sm:mx-auto sm:place-items-center flex flex-col gap-2">
        <h6 className="footer-title mb-2">Quick Links</h6>
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
          href="/dashboard/add-product"
          className={`${
            pathname === "/dashboard/add-product"
              ? "flex items-center gap-1 btn btn-primary"
              : "flex btn btn-ghost hover:border-primary hover:border-2 hover:bg-base-100 hover:text-primary items-center gap-1"
          }`}
        >
          Add Product
        </Link>
      </nav>

      {/* Extra Info Section */}
      <nav className="sm:ml-auto flex flex-col gap-1">
        <h6 className="footer-title mb-2">Contact</h6>
        <p>Email: support@nextpc.com</p>
        <p>Phone: +880 1234 567890</p>
      </nav>
    </footer>
  );
}
