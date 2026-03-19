// .client.ts suffix ensures this only runs on client (no SSR)
import 'typelessform-widget';

export default defineNuxtPlugin(() => {
  // this widget auto-registers <typeless-form> custom element on import
});
