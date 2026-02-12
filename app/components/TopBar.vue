<script setup>
import { ref, computed } from 'vue'

const route = useRoute();
const isMenuOpen = ref(false); // Controle do menu mobile

const { data: response, pending } = await useFetch('/api/content/_globals/topbar', {
  watch: [() => route.query.preview],
  query: route.query,
});

const topbar = computed(() => response.value?.data || {});

// Estilos do Header
const headerStyles = computed(() => {
  const s = topbar.value.style || {};
  const styles = {};
  if (s.background?.startsWith('#') || s.background?.startsWith('rgb')) {
    styles.backgroundColor = s.background;
  }
  return styles;
});

// Estilos do CTA
const ctaStyles = computed(() => {
  const s = topbar.value.cta?.style || {};
  const styles = {};
  if (s.bg?.startsWith('#')) styles.backgroundColor = s.bg;
  if (s.text?.startsWith('#')) styles.color = s.text;
  return styles;
});

const ctaClasses = computed(() => {
  const s = topbar.value.cta?.style || {};
  return [
    s.textSize || 'text-sm',
    s.fontWeight || 'font-bold',
    s.borderRadius || 'rounded-lg',
    s.bg && !s.bg.startsWith('#') ? s.bg : '',
    s.text && !s.text.startsWith('#') ? s.text : ''
  ].join(' ');
});

// Tipografias
const logoClasses = computed(() => {
  const t = topbar.value.typography?.logo || {};
  return `${t.size || 'text-2xl'} ${t.font || 'font-bold'}`;
});

const menuClasses = computed(() => {
  const t = topbar.value.typography?.menu || {};
  return `${t.size || 'text-sm'} ${t.font || 'font-medium'}`;
});

// Fecha o menu ao clicar em um link
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header 
    v-if="!pending && response"
    class="fixed top-0 w-full z-[100] transition-all duration-300 shadow-md flex items-center"
    :class="[topbar.style?.background || 'bg-blue-600', topbar.style?.height || 'h-20']"
    :style="headerStyles"
  >
    <div class="w-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
      
      <NuxtLink :to="topbar.logo?.link || '/'" class="flex items-center gap-2 group z-[110]" @click="closeMenu">
        <img v-if="topbar.logo?.image" :src="topbar.logo.image" class="h-10 w-auto" />
        <span 
          v-else 
          :class="logoClasses"
          :style="{ color: topbar.typography?.logo?.color }"
        >
          {{ topbar.logo?.text || 'Logo' }}
        </span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink 
          v-for="(item, index) in topbar.nav" 
          :key="index"
          :to="item.link"
          class="transition-all hover:opacity-70"
          active-class="opacity-100 font-bold decoration-2 underline-offset-8 underline"
          :class="menuClasses"
          :style="{ color: topbar.typography?.menu?.color }"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div v-if="topbar.cta?.active" class="hidden md:block">
        <NuxtLink 
          :to="topbar.cta.link"
          class="px-5 py-2 transition-all hover:scale-105 shadow-sm inline-block"
          :class="ctaClasses"
          :style="ctaStyles"
        >
          {{ topbar.cta.label }}
        </NuxtLink>
      </div>

      <button 
        class="md:hidden z-[110] p-2 focus:outline-none"
        @click="isMenuOpen = !isMenuOpen"
        :style="{ color: topbar.typography?.menu?.color || 'white' }"
      >
        <i :class="['pi text-2xl transition-transform duration-300', isMenuOpen ? 'pi-times rotate-90' : 'pi-bars']"></i>
      </button>

      <Transition name="fade-slide">
        <div 
          v-if="isMenuOpen" 
          class="fixed inset-0 w-full h-screen z-[105] flex flex-col p-8 md:hidden"
          :class="topbar.style?.background || 'bg-blue-600'"
          :style="headerStyles"
        >
          <div class="h-20"></div>

          <nav class="flex flex-col gap-6 mt-10">
            <NuxtLink 
              v-for="(item, index) in topbar.nav" 
              :key="index"
              :to="item.link"
              class="text-2xl transition-colors border-b border-white/10 pb-4"
              :class="menuClasses"
              :style="{ color: topbar.typography?.menu?.color }"
              @click="closeMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>

          <div v-if="topbar.cta?.active" class="mt-10">
            <NuxtLink 
              :to="topbar.cta.link"
              class="w-full py-4 text-center text-xl shadow-lg block"
              :class="ctaClasses"
              :style="ctaStyles"
              @click="closeMenu"
            >
              {{ topbar.cta.label }}
            </NuxtLink>
          </div>
        </div>
      </Transition>

    </div>
  </header>
</template>

<style scoped>
/* Animação do Menu Mobile */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Impedir scroll quando o menu estiver aberto */
body.menu-open {
  overflow: hidden;
}
</style>