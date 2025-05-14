// src/utils/createEmotionCache.ts
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

export default function createEmotionCache() {
  return createCache({
    key: "mui",
    stylisPlugins: [prefixer, rtlPlugin],
  });
}
