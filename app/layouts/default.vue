<template>
  <div class="min-h-screen flex flex-col bg-slate-50">
    
    <NuxtLoadingIndicator color="#2563eb" />

    <Topbar />

    <main class="flex-grow pt-20 w-full">
      <slot />
    </main>

    <Footer />

  </div>
</template>

<script setup>
// Não precisa importar Topbar e Footer se eles estiverem na pasta /components
// O Nuxt faz auto-import.
</script>

<style scoped>
/* Se precisar de ajustes globais de transição de página */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>