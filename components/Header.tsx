import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-4 border-b border-border">
      <div className="h-16 flex items-center">
        <Link href="/search" className="text-sm font-medium hover:underline">
          Search
        </Link>
      </div>
    </header>
  );
};
