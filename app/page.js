import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative min-h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(/techBanner.webp)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:max-w-xl md:max-w-2xl">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Power Up Your World with the Best Computers & Accessories
        </h1>
        <p className="text-white md:text-lg mt-5 mb-8">
          Discover our wide range of laptops, desktops, and tech gear designed
          for work, play, and everything in between.
        </p>
        <Link href="/products" className="btn btn-primary rounded-full">
          View All Products
        </Link>
      </div>
    </div>
  );
}
