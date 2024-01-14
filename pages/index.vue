<template>
  <div>
    <button @click="refetch">Refetch</button>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
import { dehydrate, useQuery, useQueryClient } from '@tanstack/vue-query';
import { onServerPrefetch } from 'vue';
import { useNuxtApp } from '~/hooks/useNuxtApp';

const fetcher = async () =>
  await fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
    return response.json();
  });

const { refetch, data, suspense } = useQuery({
  staleTime: 1 * 60 * 1000,
  queryKey: ['todo'],
  queryFn: fetcher,
});

const { ssrContext } = useNuxtApp();
const queryClient = useQueryClient();

onServerPrefetch(async () => {
  await suspense();
  ssrContext.nuxt.vueQueryState = dehydrate(queryClient);
});
</script>

<style></style>
