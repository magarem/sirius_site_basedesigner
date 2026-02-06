<template>
  <section class="w-full">
    <div class="grid grid-cols-1 lg:grid-cols-10 gap-4 h-auto lg:h-[650px]">
      
      <div class="lg:col-span-7 relative group overflow-hidden rounded-[2.5rem] border border-[#3a2216]/5 shadow-sm h-[450px] lg:h-full">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1500&h=650&fit=crop" 
          alt="Banner Principal" 
          class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#3a2216]/90 via-[#3a2216]/20 to-transparent flex flex-col justify-end p-8 md:p-16">
          <div class="mb-4">
            <span class="bg-[#A67C52] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
              Reserva Especial
            </span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FDFBF7] mb-4 leading-[1.1]">
            A Experiência do <br/> Café de Origem
          </h1>
          <p class="text-[#FDFBF7]/80 text-base max-w-xl font-light italic">
            Notas sensoriais complexas e torra artesanal para os paladares mais exigentes.
          </p>
          <div class="mt-6">
            <button class="bg-[#FDFBF7] text-[#3a2216] px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#A67C52] hover:text-white transition-all duration-300">
              Explorar Coleção
            </button>
          </div>
        </div>
      </div>

      <div class="lg:col-span-3 flex flex-col gap-4 h-full">
        
        <div class="flex-1 relative group overflow-hidden rounded-[2.5rem] border border-[#3a2216]/5 h-[250px] lg:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&h=317&fit=crop" 
            alt="Equipamentos" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-[#3a2216]/40 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[1px]">
            <span class="text-[#A67C52] text-[10px] font-black tracking-[0.2em] uppercase mb-2">Equipamentos</span>
            <h3 class="text-[#FDFBF7] font-serif font-bold text-2xl">Moedores Pro</h3>
          </div>
        </div>

        <div class="flex-1 relative group overflow-hidden rounded-[2.5rem] border border-[#3a2216]/5 h-[250px] lg:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&h=317&fit=crop" 
            alt="Clube de Assinatura" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-[#3a2216]/40 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[1px]">
            <span class="text-[#A67C52] text-[10px] font-black tracking-[0.2em] uppercase mb-2">Assinatura</span>
            <h3 class="text-[#FDFBF7] font-serif font-bold text-2xl">Receba em Casa</h3>
          </div>
        </div>

      </div>
    </div>
    
    <div class="border-b border-[#3a2216]/10 mt-12 md:mt-16"></div>
  </section>
</template>