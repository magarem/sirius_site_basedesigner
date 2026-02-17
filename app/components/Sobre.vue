<template>
 <SectionWrapper :title="response.data.title" :subtitle="response.data.description" :showFooterLine="true">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div class="flex-1">
        <!-- <h2 class="text-3xl font-bold mb-4">{{ response.data.title }}</h2> -->
        <div class="prose prose-lg">
          <MDCRenderer
            class="[&_p]:mt-0"
            :body="response.body"
            :data="response.data"
          />
        </div>
      </div>
      <!-- <div class="flex-1" v-if="response.data.images[0]">
        <img :src="response.data.images[0]" class="rounded-lg shadow-lg w-full" />
      </div> -->
    </div>
</SectionWrapper>
</template>
<script setup>
const props = defineProps({
  source: String, // Recebe "institucional/quem-somos.md"
  title: String, // Recebe do JSON da Home (opcional)
});

const route = useRoute();

// 2. Fetch de Dados
const { data: response, pending } = await useFetch(
  "/api/content/" + (props.source ? "/" + props.source : ""),
  {
    watch: [() => route.query.preview],
    query: route.query,
  },
);

console.log("Resposta da API sobre:", response.value);
</script>
