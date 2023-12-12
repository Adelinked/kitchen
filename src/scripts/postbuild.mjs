//import rss from "./rss.mjs";
import insertAmpMetaTag from "./insert-amp-meta.mjs";

async function postbuild() {
  await insertAmpMetaTag();
  //await rss();
}

postbuild();
