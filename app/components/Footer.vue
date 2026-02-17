<script setup>
const route = useRoute();

const { data: response, pending } = await useFetch('/api/content/_globals/footer', {
  watch: [() => route.query.preview],
  query: route.query,
});

const footer = computed(() => response.value?.data?response.value?.data:response.value || {});

const footerStyles = computed(() => {
  const s = footer.value.style || {};
  const t = footer.value.typography || {};
  const styles = {};

  if (s.background?.startsWith('#')) styles.backgroundColor = s.background;
  
  if (t.titles?.color?.startsWith('#')) styles['--title-color'] = t.titles.color;
  if (t.text?.color?.startsWith('#')) styles['--text-color'] = t.text.color;
  if (t.links?.color?.startsWith('#')) styles['--link-color'] = t.links.color;
  
  // Define a cor do ícone como a cor do título por padrão, ou uma cor específica
  styles['--icon-color'] = t.titles?.color || '#ffffff';

  return styles;
});
</script>

<template>
  <footer 
    v-if="!pending && response" 
    class="w-full border-t transition-colors duration-300"
    :class="footer.style?.border || 'border-transparent'"
    :style="footerStyles"
  >
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        <div class="space-y-6">
          <div class="text-2xl font-bold tracking-wider" style="color: var(--title-color, white)">
            {{ footer.col1?.logoText }}
          </div>
          <p class="leading-relaxed" :class="footer.typography?.text?.size" style="color: var(--text-color)">
            {{ footer.col1?.description }}
          </p>
          <div class="flex gap-4">
            <a 
              v-for="(social, idx) in footer.col1?.socials" :key="idx" :href="social.link" 
              class="h-10 w-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all text-white"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

        <div class="space-y-6">
          <h3 
            :class="[footer.typography?.titles?.font, footer.typography?.titles?.size]"
            class="border-l-4 border-blue-500 pl-3"
            style="color: var(--title-color)"
          >
            {{ footer.col2?.title }}
          </h3>
          <ul class="space-y-3">
            <li v-for="(link, idx) in footer.col2?.links" :key="idx">
              <NuxtLink 
                :to="link.link" 
                class="transition-all inline-block"
                :class="[footer.typography?.links?.hover, footer.typography?.text?.size]"
                style="color: var(--link-color)"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

       <div class="space-y-6">
  <h3 
    :class="[footer.typography?.titles?.font, footer.typography?.titles?.size]"
    class="border-l-4 border-blue-500 pl-3"
    style="color: var(--title-color)"
  >
    {{ footer.col3?.title }}
  </h3>
  <div class="space-y-4">
    <div v-for="(info, idx) in footer.col3?.info" :key="idx" class="flex items-start gap-3">
      <div 
        class="mt-1 h-8 w-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5"
      >
        <i 
          :class="[info.icon, 'text-sm']" 
          :style="{ color: 'var(--icon-color)' }"
        ></i>
      </div>
      <span class="mt-2" :class="footer.typography?.text?.size" style="color: var(--text-color)">
        {{ info.text }}
      </span>
    </div>
  </div>
</div>

        <div class="space-y-6 p-6 bg-white/5 rounded-3xl border border-white/5">
          <h3 class="font-bold" style="color: var(--title-color)">{{ footer.newsletter?.title }}</h3>
          <p :class="footer.typography?.text?.size" style="color: var(--text-color)">{{ footer.newsletter?.text }}</p>
          
          <form class="space-y-3" @submit.prevent>
            <input 
              type="email" 
              :placeholder="footer.newsletter?.placeholder"
              class="w-full h-10 px-4 rounded-xl bg-black/20 border border-white/10 text-sm focus:border-blue-500 focus:outline-none transition-colors"
              :style="{ color: footer.typography?.newsletterInput?.color || 'var(--text-color)' }"
            />
            <button class="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-colors">
              {{ footer.newsletter?.buttonText }}
            </button>
          </form>
        </div>

      </div>

      <div class="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] opacity-50" style="color: var(--text-color)">
        <div>{{ footer.bottom?.copyright }}</div>
        <div>{{ footer.bottom?.developer }}</div>
      </div>

    </div>
  </footer>
</template>