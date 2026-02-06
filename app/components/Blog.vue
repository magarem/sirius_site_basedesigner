<template>
  <SectionWrapper 
    title="Conteúdo & Cultura" 
    subtitle="O universo dos cafés especiais"
    :showFooterLine="false" 
  >
    <template #side>
      <div class="h-8 w-32 bg-purple-200 rounded-full flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-purple-900 cursor-pointer hover:bg-purple-300 transition-colors">
        VER ARTIGOS
      </div>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
      
      <div v-for="i in 2" :key="i" class="group cursor-pointer">
        <div class="aspect-video bg-purple-500 rounded-[2.5rem] mb-6 overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500 flex items-center justify-center text-white font-bold">
          IMAGEM POST {{ i }}
        </div>

        <div class="space-y-3 px-2">
          <div class="h-3 w-24 bg-purple-300 rounded"></div>
          
          <div class="h-8 w-full bg-purple-700/20 rounded-lg"></div>
          
          <div class="space-y-2">
            <div class="h-3 w-full bg-gray-200 rounded"></div>
            <div class="h-3 w-4/5 bg-gray-200 rounded"></div>
          </div>

          <div class="pt-2">
            <div class="h-4 w-28 bg-purple-900/10 rounded"></div>
          </div>
        </div>
      </div>

    </div>
  </SectionWrapper>
</template>