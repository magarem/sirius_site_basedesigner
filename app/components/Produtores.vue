<template>
  <SectionWrapper 
    title="Nossos Produtores" 
    subtitle="As mãos por trás de cada grão especial"
    :showFooterLine="true"
  >
    <div class="relative w-full overflow-hidden">
      <div class="flex lg:grid lg:grid-cols-2 gap-8 overflow-x-auto lg:overflow-x-visible pb-6 snap-x snap-mandatory hide-scrollbar">
        
        <div 
          v-for="i in 2" 
          :key="i"
          class="flex-none w-[85vw] lg:w-auto snap-center"
        >
          <div class="bg-white rounded-[2.5rem] border border-orange-200 overflow-hidden flex flex-col md:flex-row h-auto md:h-[320px] shadow-sm group hover:shadow-xl transition-all duration-500">
            
            <div class="w-full md:w-1/2 h-48 md:h-auto bg-orange-500 flex items-center justify-center text-white font-bold overflow-hidden">
              <div class="w-full h-full bg-orange-600/50 flex items-center justify-center">FOTO PRODUTOR</div>
            </div>

            <div class="w-full md:w-1/2 p-8 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="h-7 w-3/4 bg-orange-700/20 rounded"></div>
                <div class="h-4 w-1/2 bg-orange-400/30 rounded"></div>
                
                <div class="pt-4 space-y-2">
                  <div class="h-3 w-full bg-gray-200 rounded"></div>
                  <div class="h-3 w-full bg-gray-200 rounded"></div>
                  <div class="h-3 w-2/3 bg-gray-200 rounded"></div>
                </div>
              </div>

              <div class="mt-6 pt-4 border-t border-orange-50 flex justify-between items-end">
                <div class="space-y-1">
                  <div class="h-2 w-12 bg-gray-300 rounded"></div>
                  <div class="h-5 w-16 bg-orange-700/10 rounded"></div>
                </div>
                <div class="h-8 w-24 bg-orange-800 rounded-full"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </SectionWrapper>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>