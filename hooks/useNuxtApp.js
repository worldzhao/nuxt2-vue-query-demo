import { getCurrentInstance as getVM } from 'vue';

const globalNuxt = '$nuxt';

const getCurrentInstance = () => {
  const vm = getVM();

  if (!vm) return;

  return vm.proxy;
};

export const useNuxtApp = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('This must be called within a setup function.');

  return {
    ...(vm[globalNuxt] || vm.$options).context,
  };
};
