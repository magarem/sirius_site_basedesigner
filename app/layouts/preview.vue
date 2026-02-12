<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Topbar />

    <main class="flex-grow pt-20">
      <slot />
    </main>

    <Footer />
  </div>
</template>