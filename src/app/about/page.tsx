import { genPageMetadata } from "@/app/seo";
import PagesLayout from "@/components/layouts/pagesLayout";

export const metadata = genPageMetadata({
  title: "About Us",
  description: "About us page description",
});

export default function Page() {
  return (
    <>
      <PagesLayout title="About Us" />
    </>
  );
}
