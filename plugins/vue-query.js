import Vue from 'vue';

import { hydrate, QueryClient, VueQueryPlugin } from '@tanstack/vue-query';

export default (context) => {
  const queryClient = new QueryClient();
  const options = { queryClient };
  Vue.use(VueQueryPlugin, options);

  if (process.client) {
    if (context.nuxtState && context.nuxtState.vueQueryState) {
      hydrate(queryClient, context.nuxtState.vueQueryState);
    }
  }
};
