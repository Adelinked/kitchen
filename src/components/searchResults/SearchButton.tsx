"use client ";
import SearchProvider from "@/providers/searchProvider";
import SearchAction from "./searchAction";
const SearchButton = () => {
  /* if (
    siteMetadata.search &&
    (siteMetadata.search.provider === "algolia" ||
      siteMetadata.search.provider === "kbar")
  ) {*/
  //const SearchButtonWrapper = siteMetadata.search.provider === "algolia" ? AlgoliaButton : KBarButton;

  return (
    <>
      <SearchProvider>
        <SearchAction />
      </SearchProvider>
    </>
  );
  // }
};

export default SearchButton;
