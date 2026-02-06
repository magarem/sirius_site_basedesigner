<template>
  <SectionWrapper 
    title="Sobre nós" 
    subtitle="Construindo uma comunidade apaixonada por café de qualidade" 
    :showFooterLine="true"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      
      <div class="w-full aspect-video lg:aspect-square bg-blue-500 rounded-[2.5rem] flex items-center justify-center text-white font-bold shadow-sm">
        IMAGEM (AZUL)
      </div>

      <div class="flex flex-col space-y-6">
        <div class="h-10 w-3/4 bg-green-600 rounded-lg"></div>
        
        <div class="space-y-4">
          <div class="h-4 w-full bg-green-400/50 rounded"></div>
          <div class="h-4 w-full bg-green-400/50 rounded"></div>
          <div class="h-4 w-2/3 bg-green-400/50 rounded"></div>
        </div>

        <div class="space-y-4">
          <div class="h-4 w-full bg-green-400/50 rounded"></div>
          <div class="h-4 w-5/6 bg-green-400/50 rounded"></div>
        </div>

        <div class="h-12 w-48 bg-green-700 rounded-full mt-4"></div>
      </div>
    </div>
  </SectionWrapper>
</template>