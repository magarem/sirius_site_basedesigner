<template>
  <SectionWrapper 
    title="Micro-lotes" 
    subtitle="Ache o seu perfil"
    :showFooterLine="true"
  >
    <template #side>
      <div class="h-6 w-32 bg-yellow-600/20 rounded-full flex items-center justify-center text-[10px] font-bold text-yellow-800">
        VER COLEÇÃO
      </div>
    </template>

    <div class="relative w-full overflow-hidden">
      <div class="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-x-visible pb-6 snap-x snap-mandatory hide-scrollbar">
        
        <div 
          v-for="i in 4" 
          :key="i"
          class="flex-none w-[85vw] md:w-[45vw] lg:w-auto snap-center"
        >
          <div class="bg-white rounded-[2rem] border border-yellow-200 overflow-hidden h-full flex flex-col shadow-sm">
            
            <div class="aspect-[4/5] bg-yellow-500 flex items-center justify-center text-white font-bold">
              FOTO {{ i }}
            </div>

            <div class="p-6 space-y-4 flex-grow">
              <div class="h-6 w-3/4 bg-yellow-600/30 rounded"></div>
              
              <div class="flex justify-between">
                <div class="h-3 w-1/3 bg-yellow-400/40 rounded"></div>
                <div class="h-3 w-10 bg-yellow-600 rounded"></div>
              </div>

              <div class="pt-4 border-t border-yellow-100 flex justify-between items-center mt-auto">
                <div class="h-8 w-20 bg-yellow-700/20 rounded"></div>
                <div class="h-12 w-12 bg-yellow-800 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
/* Remove a barra de rolagem visual mas mantém a função */
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>