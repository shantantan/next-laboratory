import { SearchForm } from "@/components/SearchForm";

const SearchPage = () => {
  return (
    <div className="py-6">
      <h1 className="text-xl font-bold">Search</h1>

      <div className="mt-6">
        <SearchForm />
      </div>
    </div>
  );
};

export default SearchPage;
