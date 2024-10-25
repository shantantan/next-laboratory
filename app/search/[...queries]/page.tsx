interface Props {
  params: {
    queries: string[];
  };
}

const SearchResultPage = async ({ params }: Props) => {
  const { queries } = await params;

  const query = decodeURIComponent(queries[0]);
  const offset = Number(queries[1]);

  console.table({ query, offset });

  return (
    <div className="py-6">
      <h1 className="text-xl font-bold">Search Result</h1>
    </div>
  );
};

export default SearchResultPage;
