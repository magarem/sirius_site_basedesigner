<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <header class="fixed top-0 w-full h-20 bg-blue-600 text-white z-50 flex items-center justify-between px-10">
      <div class="w-32 h-10 bg-blue-800 rounded">Logo</div>
      <nav class="flex gap-4">
        <div v-for="i in 4" :key="i" class="w-16 h-6 bg-blue-400 rounded"></div>
      </nav>
    </header>

    <main class="flex-grow pt-20">
      <slot />
    </main>

    <footer class="w-full h-40 bg-gray-800 text-white flex items-center justify-center">
      <div class="w-1/2 h-10 bg-gray-700 rounded">Footer Content</div>
    </footer>
  </div>
</template>