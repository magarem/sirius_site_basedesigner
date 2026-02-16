<template>
  <div class="min-h-screen flex flex-col bg-white">
    <nav class="fixed top-0 left-0 right-0 h-12 bg-zinc-900 border-b border-white/10 z-[9999] flex items-center justify-between px-4 shadow-2xl">
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2 px-2 py-1 bg-[#6f942e]/20 border border-[#6f942e]/30 rounded text-[#6f942e] text-[10px] font-bold tracking-wider uppercase">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6f942e] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#6f942e]"></span>
          </span>
          Modo Preview
        </div>
        <span class="text-zinc-500 text-xs hidden md:inline">|</span>
        <span class="text-zinc-400 text-[11px] font-mono hidden md:inline">Alterações não publicadas</span>
      </div>

      <div class="flex items-center gap-4">
        <button 
          @click="closePreview" 
          class="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white text-xs font-medium rounded-md transition-all border border-white/5"
        >
          <i class="pi pi-arrow-left text-[10px]"></i>
          Voltar ao Editor
        </button>
      </div>
    </nav>
<Topbar/>
    <main class="flex-grow pt-12">
      <slot />
    </main>
  </div>
</template>

<script setup>
const router = useRouter()
const route = useRoute()

const closePreview = () => {
  // Remove o parâmetro preview da URL e volta para a rota base ou admin
  const query = { ...route.query }
  delete query.preview
  
  // Se você quiser voltar para o Sirius Studio (supondo que a rota seja /admin)
  // Caso contrário, apenas limpa a query da página atual
  router.push({ query })
}
</script>

<style scoped>
/* Garante que o PrimeIcons funcione se você estiver usando */
@import "primeicons/primeicons.css";
</style>