<template>
  <section class="w-full">
    <div class="grid grid-cols-1 lg:grid-cols-10 gap-4 h-auto lg:h-[650px]">
      
      <div class="lg:col-span-7 relative group overflow-hidden rounded-[2.5rem] bg-red-500 shadow-lg aspect-[4/5] lg:aspect-auto lg:h-full">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-16">
          <div class="h-6 w-32 bg-red-300/50 rounded-full mb-4"></div> <div class="h-16 w-3/4 bg-white/20 rounded-lg mb-4"></div>   <div class="h-4 w-1/2 bg-white/10 rounded mb-6"></div>      <div class="h-12 w-44 bg-white rounded-full"></div>         </div>
      </div>

      <div class="lg:col-span-3 flex flex-col gap-4 h-full">
        <div class="flex-1 bg-red-700/80 rounded-[2.5rem] aspect-video lg:aspect-auto flex items-center justify-center text-white font-bold">
          PROMO 1
        </div>
        <div class="flex-1 bg-red-900/80 rounded-[2.5rem] aspect-video lg:aspect-auto flex items-center justify-center text-white font-bold">
          PROMO 2
        </div>
      </div>

    </div>
  </section>
</template>