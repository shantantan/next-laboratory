const StickyPage = () => {
  return (
    <div className="py-6">
      <h1 className="text-xl font-bold">Sticky</h1>

      <div className="mt-6">
        <div className="h-20 bg-slate-200 text-sm font-bold grid place-items-center sticky top-0 left-0">
          Content Header
        </div>

        <div className="mt-6 space-y-6">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((v) => (
            <div
              key={v}
              className="py-4 bg-green-200 text-sm font-medium grid place-items-center"
            >
              {v}つめのコンテンツです
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyPage;
