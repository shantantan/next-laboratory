import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-4 border-b border-border">
      <div className="h-16 flex items-center gap-x-6">
        <Link href="/search" className="text-sm font-medium hover:underline">
          Search
        </Link>
        <Link href="/sticky" className="text-sm font-medium hover:underline">
          Sticky
        </Link>
      </div>
    </header>
  );
};
