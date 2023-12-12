import { genPageMetadata } from "@/app/seo";

import PagesLayout from "@/components/layouts/pagesLayout";

export const metadata = genPageMetadata({ title: "Privacy Policy" });

export default function Page() {
  return (
    <>
      <PagesLayout title="Privacy Policy" />
    </>
  );
}
