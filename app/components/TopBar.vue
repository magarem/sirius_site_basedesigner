<template>
  <header
    v-if="settings?.data?.topbar"
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="{
      'bg-[#f2e4d3] shadow-sm': !scrolled,   
      'bg-[#f2e4d3] shadow-md': scrolled
    }"
    :style="{ color: mainColor }"
  >
    <div class="flex items-center justify-between py-3 px-4 md:px-8 max-w-[1800px] mx-auto">
      
      <div class="flex-1 flex justify-start items-center">
        <div class="lg:hidden">
          <button @click="toggleMenu" class="focus:outline-none hover:text-[#A67C52] transition-colors p-2">
            <i v-if="!menuOpen" class="fas fa-bars text-xl"></i>
            <i v-else class="fas fa-times text-xl"></i>
          </button>
        </div>

        <nav class="hidden lg:flex items-center space-x-6">
          <template v-for="(item, index) in settings.data.topbar.menu" :key="index">
            <div v-if="item.sub && item.sub.length > 0" class="relative group/dropdown py-4">
              <button class="flex items-center text-[18px] font-serif font-medium hover:opacity-70 transition-opacity gap-1">
                {{ item.name }}
                <i class="fas fa-chevron-down text-[10px] opacity-70 mt-1"></i>
              </button>
              <div class="absolute left-0 top-full pt-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform origin-top">
                <div class="bg-[#fdfcf0] rounded shadow-xl border border-[#d1b253]/20 py-2 min-w-[200px]">
                  <NuxtLink v-for="(subItem, subIndex) in item.sub" :key="subIndex" :to="resolveLink(subItem.link)" class="block px-6 py-2 text-md font-serif text-[#431407] hover:bg-[#f9d7c0]/30">
                    {{ subItem.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <NuxtLink v-else :to="resolveLink(item.link)" class="relative text-[22px] font-serif font-medium tracking-tight group/link whitespace-nowrap">
              {{ item.name }}
              <span class="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 bg-black opacity-40 group-hover/link:w-full"></span>
            </NuxtLink>
          </template>
        </nav>
      </div>

      <div class="flex-none flex justify-center z-50">
        <NuxtLink to="/" class="group flex flex-col items-center no-underline">
          <div class="inline-flex flex-col items-center border border-[#A67C52] p-1.5 md:p-3 rounded-lg bg-[#2C241F] shadow-lg">
            <h1 class="text-lg md:text-2xl font-serif font-bold text-[#FDFBF7] tracking-tight leading-none">
              Gran Café <span class="italic text-[#A67C52]">Brasil</span>
            </h1>
            <p class="text-[6px] md:text-[8px] uppercase tracking-[0.3em] text-[#FDFBF7]/60 mt-1">
              Origin Selection • Est. 2026
            </p>
          </div>
        </NuxtLink>
      </div>

      <div class="flex-1 flex justify-end items-center gap-3 md:gap-6 relative z-50">
        <div class="hidden sm:flex items-center relative">
          <input 
            type="text" 
            placeholder="Buscar..." 
            class="bg-white/50 border border-[#A67C52]/30 rounded-full py-1.5 px-4 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#A67C52] w-32 md:w-64 transition-all"
          />
          <i class="fas fa-search absolute left-3 text-[#A67C52] text-xs"></i>
        </div>

        <div class="flex items-center gap-3 md:gap-4">
          <NuxtLink to="/account" class="hover:text-[#A67C52] transition-colors">
            <i class="far fa-user text-lg md:text-xl"></i>
          </NuxtLink>
          <NuxtLink to="/checkout" class="relative hover:text-[#A67C52] transition-colors">
            <i class="fas fa-shopping-bag text-lg md:text-xl"></i>
            <span class="absolute -top-1.5 -right-1.5 bg-[#A67C52] text-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
              0
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="menuOpen" @click="toggleMenu" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"></div>
    </transition>

    <transition name="slide">
      <div v-if="menuOpen" class="fixed top-0 left-0 h-full w-[280px] bg-[#fdfcf0] z-[70] shadow-2xl lg:hidden flex flex-col">
        <div class="p-6 border-b border-[#A67C52]/10 flex justify-between items-center">
          <span class="font-serif font-bold text-[#3a2216] uppercase tracking-widest text-xs">Menu</span>
          <button @click="toggleMenu" class="text-[#A67C52] p-2">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>

        <nav class="flex-grow overflow-y-auto p-8">
          <ul class="space-y-8">
            <li v-for="(item, index) in settings.data.topbar.menu" :key="index">
              <NuxtLink 
                :to="resolveLink(item.link)" 
                @click="toggleMenu"
                class="text-2xl font-serif font-medium text-[#3a2216] block active:text-[#A67C52]"
              >
                {{ item.name }}
              </NuxtLink>
              
              <ul v-if="item.sub && item.sub.length > 0" class="mt-4 ml-4 space-y-4 border-l border-[#A67C52]/30 pl-4">
                <li v-for="(sub, sIdx) in item.sub" :key="sIdx">
                  <NuxtLink :to="resolveLink(sub.link)" @click="toggleMenu" class="text-lg font-serif text-[#3a2216]/60">
                    {{ sub.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div class="p-8 bg-[#3a2216] text-[#FDFBF7]">
          <p class="text-[10px] uppercase tracking-[0.3em] opacity-50">Gran Café Brasil</p>
          <div class="flex gap-5 mt-4 opacity-80">
            <i class="fab fa-instagram text-lg"></i>
            <i class="fab fa-whatsapp text-lg"></i>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const mainColor = 'black'
const menuOpen = ref(false)
const scrolled = ref(false)
const route = useRoute()

// 1. Definição do modo (Preview vs Produção)
const isPreview = computed(() => route.query.preview === 'true')
const settingsPath = computed(() => isPreview.value ? 'content/settings.toml' : 'data/settings.json')

// 2. Fetch dos dados
const { data: settings } = await useFetch('/api/readfile', {
    params: { path: settingsPath.value },
    lazy: true,
    server: false,
    watch: [settingsPath]
})

// 3. Trava o scroll do body quando o menu mobile está aberto
watch(menuOpen, (val) => {
  if (process.client) {
    document.body.style.overflow = val ? 'hidden' : 'auto'
  }
})

// 4. Utilitários de Navegação
const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const onScroll = () => { scrolled.value = window.scrollY > 50 }

const resolveLink = (link: string) => {
  if (!link) return '#'
  if (link.startsWith('#')) return link
  let cleanLink = link.replace(/:/g, '/').replace('_index', '').replace('.md', '')
  if (!cleanLink.startsWith('/') && !cleanLink.startsWith('http')) cleanLink = '/' + cleanLink
  if (!cleanLink.includes('#') && cleanLink.length > 1 && cleanLink.endsWith('/')) cleanLink = cleanLink.slice(0, -1)
  return cleanLink
}

onMounted(() => { window.addEventListener('scroll', onScroll) })
onBeforeUnmount(() => { window.removeEventListener('scroll', onScroll) })
</script>

<style scoped>
/* Transição suave do fundo escuro */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Transição do painel lateral deslizando da esquerda */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}

/* Garantir que fontes serifadas carreguem se não estiverem globais */
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>