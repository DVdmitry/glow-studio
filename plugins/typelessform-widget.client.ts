// .client.ts suffix ensures this only runs on client (no SSR)
export default defineNuxtPlugin(() => {
  import('typelessform-widget');
});
