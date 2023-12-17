import { genPageMetadata } from "@/app/seo";

import PagesLayout from "@/components/layouts/pagesLayout";

export const metadata = genPageMetadata({ title: "Disclaimer" });

export default function Page() {
  return (
    <>
      <PagesLayout title="Disclaimer" />
    </>
  );
}
