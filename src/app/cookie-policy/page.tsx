import { genPageMetadata } from "@/app/seo";

import PagesLayout from "@/components/layouts/pagesLayout";

export const metadata = genPageMetadata({ title: "Cookie Policy" });

export default function Page() {
  return (
    <>
      <PagesLayout title="Cookie Policy" />
    </>
  );
}
