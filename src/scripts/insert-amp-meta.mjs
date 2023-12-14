// scripts/insert-amp-meta.mjs

import { globby } from "globby";
import fs from "fs";
import siteMetadata from "data/siteMetadata";

export default async function insertAmpMetaTag() {
  const pages = await globby(["out/blog/*.html"]);

  console.log(pages);

  try {
    pages.forEach((pagePath) => {
      const htmlStr = fs.readFileSync(pagePath, "utf8");

      const updatedHtmlStr = htmlStr.replace(
        '<meta charSet="utf-8"/>',
        `<meta charset="utf-8"/><link rel="amphtml" href="${
          siteMetadata.siteUrl
        }/${pagePath.replace("out/", "").replace(".html", "")}/amp/"/>`
      );

      fs.writeFileSync(pagePath, updatedHtmlStr, "utf8", function (err) {
        if (err) return console.log(err);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

//insertAmpMetaTag();
