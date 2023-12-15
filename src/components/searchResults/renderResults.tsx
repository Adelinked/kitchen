import { KBarResults, useMatches } from "kbar";
const RenderResults = () => {
  const { results } = useMatches();

  if (results.length) {
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) => (
          <div>
            {typeof item === "string" ? (
              <div className="pt-3">
                <div className="block border-t border-gray-100 px-4 pb-2 pt-6 text-xs font-semibold uppercase text-primary-600 dark:border-gray-800">
                  {item}
                </div>
              </div>
            ) : (
              <div
                className={`flex cursor-pointer justify-between px-4 py-2 ${
                  active
                    ? "bg-primary-600 text-gray-100"
                    : "text-gray-700 dark:text-gray-100 bg-transparent"
                }`}
              >
                <div className={"flex space-x-2"}>
                  {item.icon && (
                    <div className={"self-center"}>{item.icon}</div>
                  )}
                  <div className="block">
                    {item.subtitle && (
                      <div
                        className={`${
                          active ? "text-gray-200" : "text-gray-400"
                        } text-xs`}
                      >
                        {item.subtitle}
                      </div>
                    )}
                    <div>{item.name}</div>
                  </div>
                </div>
                {item.shortcut?.length ? (
                  <div
                    aria-hidden
                    className="flex flex-row items-center justify-center gap-x-2"
                  >
                    {item.shortcut.map((sc) => (
                      <kbd
                        key={sc}
                        className={`font-medium h-7 w-6 flex items-center	justify-center text-xs rounded border ${
                          active
                            ? "text-gray-200 border-gray-200"
                            : "text-gray-400 border-gray-400"
                        }`}
                      >
                        {sc}
                      </kbd>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        )}
      />
    );
  } else {
    return (
      <div className="block border-t border-gray-100 px-4 py-8 text-center text-gray-400 dark:border-gray-800 dark:text-gray-600">
        No results for your search...
      </div>
    );
  }
};

export default RenderResults;
