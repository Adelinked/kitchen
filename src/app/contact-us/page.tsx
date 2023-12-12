import { genPageMetadata } from "@/app/seo";

import PagesLayout from "@/components/layouts/pagesLayout";

export const metadata = genPageMetadata({ title: "Contact Us" });

export default function Page() {
  return (
    <>
      <PagesLayout title="Contact Us" />
    </>
  );
}
