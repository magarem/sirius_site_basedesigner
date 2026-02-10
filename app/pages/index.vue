<script setup>
// 1. Imports
import { computed } from 'vue' // Boa prática importar explicitamente
import Hero from '~/components/Hero.vue'
import Sobre from '~/components/Sobre.vue'
import Catalogo from '~/components/Catalogo.vue'
import Produtores from '~/components/Produtores.vue'
import Blog from '~/components/Blog.vue'

const componentsMap = {
  Hero,
  Sobre,
  Catalogo,
  Produtores,
  Blog
}

const route = useRoute();

// 2. Fetch de Dados
const { data: response, pending } = await useFetch('/api/content/home', {
  watch: [() => route.query.preview],
  query: route.query
});

console.log('Resposta da API:', response.value);

// 3. Computed Inteligente (Filtra e Prepara)
const sections = computed(() => {
  // Normaliza a resposta: aceita tanto Array direto quanto objeto { sections: [] }
  const rawData = response.value.data;
  const list = Array.isArray(rawData) ? rawData : (rawData?.sections || []);

  // Filtra as seções
  return list.filter(section => {
    // Se a seção for inválida, remove
    if (!section || !section._type) return false;

    // Regra de Visibilidade:
    // Mostra se: _visible for true OU se estivermos em modo preview
    const isVisible = section._visible !== false; // Assume true se undefined
    const isPreview = route.query.preview === 'true';

    return isVisible || isPreview;
  });
});

// 4. Helper para limpar as Props
// Remove chaves que começam com "_" antes de passar para o componente
const getComponentProps = (section) => {
  const props = {};
  for (const key in section) {
    if (!key.startsWith('_')) {
      props[key] = section[key];
    }
  }
  return props;
}
</script>

<template>
  <div>
    <div v-if="pending" class="flex justify-center p-20">
      <span class="animate-pulse text-gray-500">Carregando layout...</span>
    </div>
    
    <div v-else class="w-full flex flex-col items-center pb-20 gap-16 md:gap-10">
      
      <div 
        v-for="section in sections" 
        :key="section._id"
        :class="section._wrapperClass"
      >
        <!-- <div 
          v-if="section._visible === false && route.query.preview === 'true'"
          class="bg-red-100 text-red-800 text-xs text-center py-1 border border-red-200 mb-2"
        >
          [Item Oculto em Produção]
        </div> -->

        <component 
          v-if="componentsMap[section._type]"
          :is="componentsMap[section._type]" 
          v-bind="getComponentProps(section)"
          :id="section._id?.toLowerCase()"
        />
        
        <div v-else class="p-4 border border-dashed border-gray-400 text-gray-500">
          Componente desconhecido: <strong>{{ section._type }}</strong>
        </div>

      </div>

    </div>
  </div>
</template>