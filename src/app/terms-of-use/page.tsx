import { genPageMetadata } from "@/app/seo";

import PagesLayout from "@/components/layouts/pagesLayout";

export const metadata = genPageMetadata({ title: "Terms of Use" });

export default function Page() {
  return (
    <>
      <PagesLayout title="Terms of Use" />
    </>
  );
}
